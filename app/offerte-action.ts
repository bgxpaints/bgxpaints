"use server";

import { headers } from "next/headers";
import { site } from "@/content/site";

export type OfferteState = { ok: boolean; message: string } | null;

function originFromRequest(headerStore: Headers) {
  const host =
    headerStore.get("x-forwarded-host") ||
    headerStore.get("host") ||
    "localhost:3000";
  const proto =
    headerStore.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function sendOfferte(
  _prev: OfferteState,
  formData: FormData,
): Promise<OfferteState> {
  if (String(formData.get("website") || "").trim()) {
    return { ok: true, message: "Verzonden. We nemen contact met u op." };
  }

  const naam = String(formData.get("naam") || "").trim();
  const telefoon = String(formData.get("telefoon") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const gemeente = String(formData.get("gemeente") || "").trim();
  const bericht = String(formData.get("bericht") || "").trim();

  if (!naam || !telefoon || !email || !gemeente || !bericht) {
    return { ok: false, message: "Vul alle velden in." };
  }

  const origin = originFromRequest(await headers());

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/`,
      },
      body: JSON.stringify({
        name: naam,
        email,
        telefoon,
        gemeente,
        message: bericht,
        _subject: `Offerte schilderwerk ${gemeente}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const payload = (await response.json()) as {
      success?: string | boolean;
      message?: string;
    };
    const note = String(payload.message || "");

    if (/activat/i.test(note)) {
      return {
        ok: false,
        message:
          "Eerste keer: open info@bgxpaints.be, klik de activatielink van FormSubmit. Daarna komen offertes automatisch binnen.",
      };
    }

    if (!response.ok || payload.success === false || payload.success === "false") {
      return {
        ok: false,
        message: "Verzenden lukte niet. Bel of mail ons rechtstreeks.",
      };
    }
  } catch {
    return {
      ok: false,
      message: "Verzenden lukte niet. Bel of mail ons rechtstreeks.",
    };
  }

  return { ok: true, message: "Verzonden. We antwoorden op info@bgxpaints.be." };
}
