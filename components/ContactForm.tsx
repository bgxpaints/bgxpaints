"use client";

import { useActionState } from "react";
import { sendOfferte } from "@/app/offerte-action";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendOfferte, null);

  if (state?.ok) {
    return <p className="font-semibold text-ink">{state.message}</p>;
  }

  return (
    <form action={action} className="grid gap-[var(--ds-space-16)]">
      {state && !state.ok ? <p className="text-ink">{state.message}</p> : null}
      <label className="grid gap-[var(--ds-space-8)]">
        <span>Naam</span>
        <input
          required
          name="naam"
          autoComplete="name"
          className="min-h-[var(--ds-target)] border border-line bg-surface px-[var(--ds-space-12)] text-ink"
        />
      </label>
      <label className="grid gap-[var(--ds-space-8)]">
        <span>Telefoon</span>
        <input
          required
          name="telefoon"
          type="tel"
          autoComplete="tel"
          className="min-h-[var(--ds-target)] border border-line bg-surface px-[var(--ds-space-12)] text-ink"
        />
      </label>
      <label className="grid gap-[var(--ds-space-8)]">
        <span>E-mail</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="min-h-[var(--ds-target)] border border-line bg-surface px-[var(--ds-space-12)] text-ink"
        />
      </label>
      <label className="grid gap-[var(--ds-space-8)]">
        <span>Gemeente</span>
        <input
          required
          name="gemeente"
          autoComplete="address-level2"
          className="min-h-[var(--ds-target)] border border-line bg-surface px-[var(--ds-space-12)] text-ink"
        />
      </label>
      <label className="grid gap-[var(--ds-space-8)]">
        <span>Wat moet er geschilderd worden?</span>
        <textarea
          required
          name="bericht"
          rows={5}
          className="border border-line bg-surface px-[var(--ds-space-12)] py-[var(--ds-space-12)] text-ink"
        />
      </label>
      <div aria-hidden="true" className="hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn-primary" disabled={pending} type="submit">
        {pending ? "Verzenden…" : "Offerte vragen"}
      </button>
    </form>
  );
}
