"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

export function MailingListForm() {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    if (email) {
      sessionStorage.setItem("chloe-mailing-note", email);
    }
    setDone(true);
  }

  return (
    <form onSubmit={onSubmit} className="min-w-0">
      <label htmlFor="mailing-email" className="sr-only">
        Email
      </label>
      <input
        id="mailing-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={site.mailingList.placeholder}
        className="w-full border border-white bg-white px-3 py-2 text-navy placeholder:text-navy/50"
      />
      <button
        type="submit"
        className="mt-3 w-full bg-pink px-3 py-3 text-left text-sm leading-5 text-white"
      >
        {site.mailingList.button}
      </button>
      {done ? (
        <p className="mt-3 text-sm leading-6 text-white/85" role="status">
          {site.mailingList.success}
        </p>
      ) : null}
    </form>
  );
}
