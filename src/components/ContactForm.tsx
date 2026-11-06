"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

const fields = [
  { name: "first", label: "First", type: "text", required: false, autoComplete: "given-name" },
  { name: "last", label: "Last", type: "text", required: false, autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm">
            <span className="mb-1 block uppercase tracking-[0.14em] text-navy">
              {field.label}
              {field.required ? <span className="text-pink"> *</span> : null}
            </span>
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              className="w-full border border-navy/20 bg-white px-3 py-2"
            />
          </label>
        ))}
      </div>
      <label className="block text-sm">
        <span className="mb-1 block uppercase tracking-[0.14em] text-navy">
          Message <span className="text-pink">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full border border-navy/20 bg-white px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
      >
        {site.ui.send}
      </button>
      {sent ? (
        <p className="text-sm leading-6" role="status">
          {site.ui.contactSuccess}
        </p>
      ) : null}
    </form>
  );
}
