"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { privacyDefaults } from "@/lib/constants";

type ConsentStatus = "accepted" | "rejected" | "unknown";

function readConsent(): ConsentStatus {
  if (typeof window === "undefined") {
    return "accepted";
  }

  const storedValue = window.localStorage.getItem(privacyDefaults.consentCookieName);
  return storedValue === "accepted" || storedValue === "rejected"
    ? storedValue
    : "unknown";
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("thebarber-consent", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("thebarber-consent", callback);
  };
}

export function CookieConsent() {
  const status = useSyncExternalStore(subscribeToConsent, readConsent, () => "accepted");

  function saveConsent(nextStatus: Exclude<ConsentStatus, "unknown">) {
    window.localStorage.setItem(privacyDefaults.consentCookieName, nextStatus);
    window.dispatchEvent(new Event("thebarber-consent"));
  }

  if (status !== "unknown") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white p-4 shadow-2xl">
      <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-950">
            Gestion des cookies conforme CNIL
          </p>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-600">
            Les cookies strictement necessaires fonctionnent toujours. Les mesures
            d&apos;audience et campagnes marketing ne seront activees qu&apos;apres votre accord.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" onClick={() => saveConsent("rejected")}>
            Refuser
          </Button>
          <Button onClick={() => saveConsent("accepted")}>Accepter</Button>
        </div>
      </div>
    </div>
  );
}
