"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function PasswordGate() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: formData.get("password") }),
      });
      if (!response.ok) {
        setError(response.status === 503 ? "The private page is temporarily unavailable. Please try again later." : "That password doesn’t match. Please try again.");
        setIsSubmitting(false);
        return;
      }
      window.location.reload();
    } catch {
      setError("Could not check the password. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className={`${inter.className} flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 px-5 py-10 text-rose-950`}>
      <section className="w-full max-w-md rounded-[2rem] border border-white/80 bg-white/90 p-7 text-center shadow-2xl backdrop-blur sm:p-10">
        <div aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-3xl">✉</div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-rose-600">A private letter</p>
        <h1 className={`${playfair.className} mt-3 text-3xl font-bold text-rose-950 sm:text-4xl`}>For Charmaine</h1>
        <p className="mt-3 leading-7 text-rose-800">Enter the password to open the page.</p>
        <form onSubmit={unlock} className="mt-7 text-left">
          <label htmlFor="page-password" className="text-sm font-semibold text-rose-950">Password</label>
          <input
            id="page-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            autoFocus
            aria-describedby={error ? "password-error" : undefined}
            aria-invalid={Boolean(error)}
            className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
            placeholder="Type the password"
          />
          {error && <p id="password-error" role="alert" className="mt-3 text-sm font-medium text-rose-700">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="mt-5 w-full rounded-full bg-rose-700 px-5 py-3 font-bold text-white transition hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900 disabled:cursor-wait disabled:opacity-70">
            {isSubmitting ? "Checking…" : "Open the letter"}
          </button>
        </form>
      </section>
    </main>
  );
}
