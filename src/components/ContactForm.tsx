"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
            Name
          </span>
          <input
            className="ase-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
            Email
          </span>
          <input
            className="ase-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
          Organization
        </span>
        <input
          className="ase-input"
          name="organization"
          value={form.organization}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
          Message
        </span>
        <textarea
          className="ase-input min-h-[140px] resize-y"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="ase-btn ase-btn-primary min-w-40"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        <p className="text-sm text-ase-gray" aria-live="polite">
          {status === "sent" && "Thank you. Your message has been received."}
          {status === "error" &&
            "Unable to submit at the moment. Please try again."}
        </p>
      </div>
    </form>
  );
}
