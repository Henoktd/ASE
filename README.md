# ASE Website

Production website for **ASE International (ASE)**.

This project is a Next.js application deployed to cPanel through GitHub Actions and served with Passenger/Node.js.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Nodemailer for contact form email delivery
- GitHub Actions for CI/CD
- cPanel Application Manager + Passenger for hosting

## Project Structure

- `src/app` - App Router pages and API routes
- `src/components` - shared UI components
- `src/lib` - shared content/config values
- `public` - static assets
- `.github/workflows/deploy-cpanel.yml` - production deployment workflow
- `app.js` - Passenger startup entry point

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Quality checks:

```bash
npm run lint
npm run build
```

## Production Deployment

Deployment is triggered automatically on push to `main`.

The GitHub Actions workflow does the following:

1. installs dependencies
2. builds the app on GitHub
3. uploads the project to cPanel
4. writes Passenger `.htaccess` config
5. writes `.env.production` on the server from GitHub Secrets
6. restarts the Passenger app

Production workflow file:

- [deploy-cpanel.yml](c:/Users/Administrator/OneDrive%20-%20Solstice%20Ventures%20Holding%20Limited/Desktop/ASE/.github/workflows/deploy-cpanel.yml)

## Required GitHub Secrets

### cPanel / Deployment

- `CPANEL_HOST`
- `CPANEL_USER`
- `CPANEL_APP_ROOT`
- `CPANEL_NODE_PATH`
- `CPANEL_NPM_CLI`
- `CPANEL_SSH_PRIVATE_KEY`

### SMTP / Contact Form

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO_EMAIL`

## Current Production Hosting Setup

Current live host details:

- domain: `ase-int.com`
- cPanel user: `afrispxy`
- app root: `/home/afrispxy/nodeapps/ase`
- Passenger startup file: `app.js`
- Node binary: `/opt/alt/alt-nodejs22/root/usr/bin/node`

The workflow rewrites `public_html/.htaccess` so Passenger uses the correct app root and Node binary.

## Contact Form / Email Delivery

The contact form submits to:

- `src/app/api/contact/route.ts`

Email delivery uses SMTP through environment variables. Nothing should be hardcoded in the application for mail credentials.

Current intended production pattern:

- authenticated SMTP account can be changed later without code changes
- visible sender can be updated to `info@ase-int.com`
- destination inbox is controlled by `CONTACT_TO_EMAIL`

If SMTP stops working:

1. check GitHub Secrets
2. check `~/nodeapps/ase/.env.production`
3. check `~/nodeapps/ase/stderr.log`
4. restart Passenger with `touch ~/nodeapps/ase/tmp/restart.txt`

## Important Operational Notes

- Do not store SMTP credentials in source files.
- If an app password is exposed or shared, rotate it and update:
  - GitHub Secret `SMTP_PASS`
- If the sending mailbox changes in future, only env vars should need updating.
- The current deployment approach builds on GitHub instead of cPanel because cPanel build resources were not reliable for this project.

## Common Maintenance Tasks

### Restart the live app

```bash
touch ~/nodeapps/ase/tmp/restart.txt
```

### Check live app errors

```bash
tail -n 120 ~/nodeapps/ase/stderr.log
```

### Verify env file on server

```bash
cat ~/nodeapps/ase/.env.production
```

### Verify deployed SMTP code

```bash
grep -n "nodemailer" ~/nodeapps/ase/src/app/api/contact/route.ts
```

## Documentation

Detailed operational notes are in:

- [docs/OPERATIONS.md](c:/Users/Administrator/OneDrive%20-%20Solstice%20Ventures%20Holding%20Limited/Desktop/ASE/docs/OPERATIONS.md)
