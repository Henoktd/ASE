# ASE Operations Guide

## Overview

This document is the practical reference for maintaining the live ASE website.

Use it for:

- deployment troubleshooting
- cPanel setup reference
- SMTP/email maintenance
- future mailbox migration

## Hosting Model

The site runs as a Node.js application on cPanel using Passenger.

Key production pieces:

- domain: `ase-int.com`
- cPanel Application Manager app: `ASE Website`
- app root: `/home/afrispxy/nodeapps/ase`
- startup file: `app.js`
- Passenger config written into `public_html/.htaccess`

## Why Build Happens on GitHub

This app originally tried to build on cPanel, but shared hosting resource limits caused repeated failures.

Observed issues included:

- Turbopack thread pool/resource failures
- Webpack worker `EAGAIN` issues during build
- missing default Node path in the hosting environment

Because of that, the stable production pattern is:

1. build on GitHub Actions
2. upload built app to cPanel
3. restart Passenger

## Passenger / Node Notes

The server does not use `/usr/bin/node` successfully for this app.

Working Node binary:

```text
/opt/alt/alt-nodejs22/root/usr/bin/node
```

This is why the workflow writes:

```apache
PassengerNodejs /opt/alt/alt-nodejs22/root/usr/bin/node
```

If the live site shows `503 Service Unavailable`, check:

1. `.htaccess`
2. `stderr.log`
3. whether the app root is correct

## Deployment Workflow Responsibilities

The deployment workflow currently:

1. checks out the repo
2. installs dependencies
3. builds the app
4. uploads the project files to cPanel
5. writes `public_html/.htaccess`
6. writes `~/nodeapps/ase/.env.production`
7. restarts Passenger

If deployment succeeds but the site does not reflect changes, verify:

```bash
ls -la ~/nodeapps/ase
```

and:

```bash
grep -n "nodemailer" ~/nodeapps/ase/src/app/api/contact/route.ts
```

## SMTP / Contact Form

### Runtime file

The contact form API route is:

```text
src/app/api/contact/route.ts
```

The live server should receive a generated environment file:

```text
~/nodeapps/ase/.env.production
```

### Required SMTP values

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO_EMAIL`

### Current email architecture

Intended production behavior:

- authenticated sender account may be different from the visible sender
- visible sender can be updated to `info@ase-int.com`
- recipient can be updated to `info@ase-int.com`

This allows future mailbox changes without code changes.

## Microsoft 365 / Exchange Notes

Current SMTP model was designed so it can later move from a personal authenticated account to a dedicated service mailbox.

Recommended long-term setup:

- shared mailbox: `info@ase-int.com`
- dedicated sender mailbox for website authentication
- `Send As` permission granted to the dedicated sender

Avoid permanent dependence on a specific employee mailbox.

If the sender changes later:

- update GitHub SMTP secrets
- rerun deploy

No code changes should be needed.

## Common Failure Modes

### 1. App root path issue

At one point, a malformed deploy path created:

```text
/home/afrispxy/nodeapps/ase?
```

instead of:

```text
/home/afrispxy/nodeapps/ase
```

If odd deployment behavior happens again, check for accidental duplicate folders:

```bash
find /home/afrispxy -maxdepth 3 -type d -name "ase*"
```

### 2. Missing environment variables

If the form returns a submit error, check:

```bash
cat ~/nodeapps/ase/.env.production
```

and:

```bash
tail -n 120 ~/nodeapps/ase/stderr.log
```

### 3. Passenger startup errors

If the app does not boot, inspect:

```bash
tail -n 120 ~/nodeapps/ase/stderr.log
```

and manually test:

```bash
cd ~/nodeapps/ase
/opt/alt/alt-nodejs22/root/usr/bin/node app.js
```

## Safe Credential Handling

- Never commit SMTP passwords to the repository.
- Keep credentials in GitHub Secrets only.
- Rotate exposed app passwords immediately.
- Prefer a dedicated service sender over a person’s account.

## Live Checks

### Restart the app

```bash
touch ~/nodeapps/ase/tmp/restart.txt
```

### Inspect current stderr log

```bash
tail -n 120 ~/nodeapps/ase/stderr.log
```

### Confirm SMTP code is live

```bash
grep -n "nodemailer" ~/nodeapps/ase/src/app/api/contact/route.ts
grep -n "SMTP_HOST" ~/nodeapps/ase/src/app/api/contact/route.ts
grep -n "\"nodemailer\"" ~/nodeapps/ase/package.json
```

### Confirm env file exists

```bash
ls -la ~/nodeapps/ase/.env.production
cat ~/nodeapps/ase/.env.production
```

## Future Updates

When updating content or design:

1. make the change locally
2. run:

```bash
npm run lint
npm run build
```

3. push to `main`
4. check GitHub Actions
5. verify the live site

When updating SMTP:

1. change GitHub SMTP secrets
2. rerun deploy
3. test the Engage form

## Suggested Future Improvements

- move from personal SMTP auth to a dedicated service mailbox
- add structured contact form success/error logging
- add lightweight smoke checks after deployment
- clean up any stray accidental directories on cPanel after confirming deployment stability
