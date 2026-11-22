"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

const notes = [
  "I hope you know how much your thoughtfulness matters. The way you listen and notice people says a lot about you.",
  "Your curiosity and the way you see the world are things I would like to know more about, at your pace.",
  "A small reminder: you deserve to be appreciated for all the things that make you who you are.",
];

export default function SurpriseNote() {
  const [noteIndex, setNoteIndex] = useState<number | null>(null);

  return (
    <section className="px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-rose-900 p-7 text-white shadow-xl sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-200 sm:text-sm">A little surprise</p>
        <h2 className={`${playfair.className} mt-3 text-3xl font-bold sm:text-4xl`}>A note, whenever you need one.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-rose-100">Tap below to uncover a small reminder. There are a few, so you can come back for another.</p>
        <button
          type="button"
          onClick={() => setNoteIndex((current) => current === null ? 0 : (current + 1) % notes.length)}
          aria-expanded={noteIndex !== null}
          aria-controls="surprise-note"
          className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-rose-900 transition hover:-translate-y-0.5 hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {noteIndex === null ? "Open a little note" : "Reveal another note"}
        </button>
        <div id="surprise-note" aria-live="polite" className={noteIndex === null ? "hidden" : "mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-lg leading-8 text-white"}>
          {noteIndex !== null ? notes[noteIndex] : ""}
        </div>
      </div>
    </section>
  );
}
