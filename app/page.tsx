"use client";

import { useState } from "react";
import Image from "next/image";
import { Great_Vibes, Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

type Song = {
  title: string;
  artist: string;
  reason: string;
  spotifyLink: string;
  embedLink: string;
};

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);

  const thingsILike = [
    "Your smile has this quiet way of making everything feel lighter, even on ordinary days.",
    "Your laugh stays in my mind because it feels honest, warm, and naturally beautiful.",
    "I like the way you carry yourself with grace, even when you are not trying to impress anyone.",
    "Your kindness shows in the little things, the simple things, and the things most people overlook.",
    "There is a calmness in your presence that makes the world feel softer whenever you are around.",
  ];

  const thingsIAdmire = [
    "your heart, because you have a way of treating people with care and sincerity.",
    "your strength, especially when life becomes heavy and you still continue with grace.",
    "your patience, because your gentleness says a lot about the kind of person you are.",
    "your beauty, not only in the way you look, but in the way you speak, care, and exist.",
    "the way you inspire me to become better, softer, more genuine, and closer to God.",
  ];

  const nameCompliments = [
    { letter: "C", word: "Caring", meaning: "You notice how others feel, and your kindness makes people feel seen." },
    { letter: "H", word: "Hopeful", meaning: "You bring a bright outlook that makes hard days seem gentler." },
    { letter: "A", word: "Authentic", meaning: "You are genuine and comfortable being yourself." },
    { letter: "R", word: "Resilient", meaning: "You keep finding strength and grace through life's challenges." },
    { letter: "M", word: "Mindful", meaning: "You listen closely and remember the small things that matter." },
    { letter: "A", word: "Admirable", meaning: "Your sincerity and good heart make you easy to respect." },
    { letter: "I", word: "Inspiring", meaning: "The way you live encourages others to grow and do good." },
    { letter: "N", word: "Nurturing", meaning: "You make people feel cared for, safe, and understood." },
    { letter: "E", word: "Elegant", meaning: "Your grace shows in your words, choices, and quiet confidence." },
  ];

  const photos = [
    {
      src: "/photos/k4.jpg",
      caption: "A kind of beauty that feels timeless.",
    },
    {
      src: "/photos/k2.jpg",
      caption: "That smile is honestly unforgettable.",
    },
    {
      src: "/photos/k1.jpg",
      caption: "Soft, pretty, and effortlessly charming.",
    },
  ];

  const songs: Song[] = [
    {
      title: "The Most Beautiful Thing",
      artist: "Bruno Major",
      reason: "This reminds me of how naturally beautiful you are.",
      spotifyLink: "https://open.spotify.com/track/07koEqsKHZTlGVMC9eoEjO",
      embedLink:
        "https://open.spotify.com/embed/track/07koEqsKHZTlGVMC9eoEjO?utm_source=generator",
    },
    {
      title: "Nothing",
      artist: "Bruno Major",
      reason: "This reminds me that even simple moments can feel special.",
      spotifyLink: "https://open.spotify.com/track/1lORkxEMmsCZqhoxcmk3A3",
      embedLink:
        "https://open.spotify.com/embed/track/1lORkxEMmsCZqhoxcmk3A3?utm_source=generator",
    },
    {
      title: "Best Part",
      artist: "Daniel Caesar ft. H.E.R.",
      reason: "This reminds me of someone who makes an ordinary day better.",
      spotifyLink: "https://open.spotify.com/track/1RMJOxR6GRPsBHL8qeC2ux",
      embedLink:
        "https://open.spotify.com/embed/track/1RMJOxR6GRPsBHL8qeC2ux?utm_source=generator",
    },
    {
      title: "Those Eyes",
      artist: "New West",
      reason:
        "This reminds me of the small details that make someone unforgettable.",
      spotifyLink: "https://open.spotify.com/track/50x1Ic8CaXkYNvjmxe3WXy",
      embedLink:
        "https://open.spotify.com/embed/track/50x1Ic8CaXkYNvjmxe3WXy?utm_source=generator",
    },
    {
      title: "Until I Found You",
      artist: "Stephen Sanchez",
      reason: "This has that soft, sweet, old-school romantic feeling.",
      spotifyLink: "https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV",
      embedLink:
        "https://open.spotify.com/embed/track/0T5iIrXA4p5GsubkhuBIKV?utm_source=generator",
    },
    {
      title: "Heaven Knows",
      artist: "Orange & Lemons",
      reason: "This feels soft, sincere, and heartfelt.",
      spotifyLink: "https://open.spotify.com/track/0Qra8Ps4tJAZPqRXyehCjc",
      embedLink:
        "https://open.spotify.com/embed/track/0Qra8Ps4tJAZPqRXyehCjc?utm_source=generator",
    },
  ];

  if (!showInvitation) {
    return (
      <main
        className={`${inter.className} flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 px-6 text-center text-rose-950`}
      >
        <section className="w-full max-w-3xl rounded-[2rem] border border-white/70 bg-white/80 px-8 py-16 shadow-2xl backdrop-blur-md">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-4xl shadow-inner">
            💌
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-rose-500">
            A simple invitation
          </p>

          <h1
            className={`${greatVibes.className} mx-auto mb-8 max-w-2xl text-6xl leading-tight text-rose-900 md:text-8xl`}
          >
            A little invitation for Charmaine
          </h1>

          <button
            onClick={() => setShowInvitation(true)}
            className="rounded-full bg-rose-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-rose-700"
          >
            Open Invitation
          </button>
        </section>
      </main>
    );
  }

  return (
    <main
      className={`${inter.className} min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 text-rose-950`}
    >
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-2xl backdrop-blur-md md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
            <div className="rounded-[1.5rem] bg-rose-900 p-7 text-white shadow-xl">
              <div className="mb-5 overflow-hidden rounded-[1.3rem] border border-white/20">
                <Image
                  src="/photos/k4.jpg"
                  alt="A beautiful photo"
                  width={700}
                  height={900}
                  className="h-52 w-full object-cover"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[3px] text-rose-200">
                A little page made for you
              </p>

              <h1
                className={`${greatVibes.className} mt-4 text-6xl leading-tight text-white md:text-8xl`}
              >
                For Charmaine
              </h1>

              <p className="mt-5 text-base leading-7 text-rose-100">
                I made this because there are things about you that deserve to
                be appreciated. This is just a small way of saying that your
                presence, your heart, and your beauty are something special.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href="#photos"
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-rose-900 transition hover:bg-rose-100"
                >
                  View Photos
                </a>

                <a
                  href="#songs"
                  className="rounded-full border border-white/40 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  View Songs
                </a>

                <a
                  href="#invitation"
                  className="rounded-full border border-white/40 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Read Invitation
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-lg">
              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-rose-500">
                Her name in words
              </p>

              <h2
                className={`${playfair.className} text-5xl font-extrabold tracking-[0.25em] text-rose-900 md:text-7xl`}
              >
                CHARMAINE
              </h2>

              <div className="mt-6 grid gap-3">
                {nameCompliments.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-rose-100 bg-rose-50 p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-xl font-extrabold text-white">
                      {item.letter}
                    </div>

                    <div>
                      <h3
                        className={`${playfair.className} text-xl font-bold text-rose-900`}
                      >
                        {item.word}
                      </h3>

                      <p className="text-sm leading-6 text-rose-700">
                        {item.meaning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <aside className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-6 shadow-lg">
                <div className="mb-5 overflow-hidden rounded-[1.3rem] border border-rose-200">
                  <Image
                    src="/photos/k2.jpg"
                    alt="A warm smiling photo"
                    width={700}
                    height={900}
                    className="h-48 w-full object-cover"
                  />
                </div>

                <p className="text-sm font-bold uppercase tracking-[3px] text-rose-500">
                  A gentle reminder
                </p>

                <h3
                  className={`${playfair.className} mt-4 text-3xl font-extrabold leading-tight text-rose-900`}
                >
                  No matter how much people hurt you, never let them lower your
                  value.
                </h3>

                <p className="mt-4 text-base leading-7 text-rose-700">
                  You are still worthy of love, respect, peace, and happiness.
                  The way people treat you does not define how precious you are.
                </p>
              </aside>

              <div className="rounded-[1.5rem] bg-rose-900 p-6 text-white shadow-lg">
                <div className="mb-5 overflow-hidden rounded-[1.3rem] border border-white/20">
                  <Image
                    src="/photos/k1.jpg"
                    alt="A soft charming photo"
                    width={700}
                    height={900}
                    className="h-48 w-full object-cover"
                  />
                </div>

                <p
                  className={`${greatVibes.className} text-4xl leading-tight md:text-5xl`}
                >
                  “Love is patient and kind.”
                </p>

                <p className="mt-4 text-sm font-semibold text-rose-200">
                  1 Corinthians 13:4
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-lg">
              <h2
                className={`${playfair.className} mb-5 text-4xl font-bold italic text-rose-900`}
              >
                What I Like About You
              </h2>

              <div className="grid gap-3">
                {thingsILike.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-rose-100 bg-rose-50 p-4"
                  >
                    <p className="text-sm font-bold text-rose-500">
                      0{index + 1}
                    </p>

                    <p className="mt-1 leading-7 text-rose-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-lg">
              <h2
                className={`${playfair.className} mb-5 text-4xl font-bold italic text-rose-900`}
              >
                What I Admire About You
              </h2>

              <div className="grid gap-3">
                {thingsIAdmire.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm font-bold text-rose-500">
                      0{index + 1}
                    </p>

                    <p className="mt-1 leading-7 text-rose-800">
                      I admire {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section
            id="photos"
            className="mt-6 rounded-[1.5rem] bg-white p-6 shadow-lg"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-rose-500">
              Little moments of you
            </p>

            <h2
              className={`${playfair.className} text-4xl font-bold italic text-rose-900 md:text-5xl`}
            >
              Photos That Make This Page Feel More Like You
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-rose-700">
              I added these because words are sweet, but seeing you makes this
              page feel more personal.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[2rem] border border-rose-200 bg-rose-50 p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={photo.src}
                    alt={`Charmaine photo ${index + 1}`}
                    width={700}
                    height={900}
                    className="h-[420px] w-full rounded-[1.5rem] object-cover"
                  />

                  <p className="mt-5 text-center text-base font-medium leading-7 text-rose-800">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="songs" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-white/80 p-8 shadow-xl backdrop-blur md:p-12">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-[3px] text-rose-500">
            A small playlist
          </p>

          <h2
            className={`${playfair.className} text-center text-5xl font-extrabold italic text-rose-900 md:text-6xl`}
          >
            Songs That Remind Me of You
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-rose-700">
            These songs carry the kind of softness, beauty, and sincerity that
            reminds me of you.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {songs.map((song, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-rose-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <iframe
                  title={`${song.title} by ${song.artist}`}
                  src={song.embedLink}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-3xl"
                />

                <div className="px-2 pb-2 pt-6">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-rose-500">
                    Song 0{index + 1}
                  </p>

                  <h3
                    className={`${playfair.className} mt-2 text-3xl font-bold text-rose-900`}
                  >
                    {song.title}
                  </h3>

                  <p className="mt-1 font-semibold text-rose-600">
                    {song.artist}
                  </p>

                  <p className="mt-4 text-lg leading-8 text-rose-800">
                    {song.reason}
                  </p>

                  <a
                    href={song.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"
                  >
                    Open on Spotify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="invitation" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-xl md:p-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-rose-500">
            My simple invitation
          </p>

          <h2
            className={`${playfair.className} text-5xl font-extrabold italic text-rose-900 md:text-6xl`}
          >
            Church and Coffee?
          </h2>

          <p className="mt-6 text-lg leading-8 text-rose-800">
            I would love to invite you to go to church with me. After that,
            maybe we can have coffee together and spend a peaceful day.
          </p>

          <p className="mt-5 text-lg leading-8 text-rose-800">
            Nothing too fancy. Just a simple day with God, good coffee, and your
            beautiful presence.
          </p>

          <p className="mt-8 text-2xl font-bold text-rose-900">
            Would you like to go with me?
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:your-email@gmail.com?subject=Church and Coffee&body=Yes, I would love to go with you."
              className="rounded-full bg-rose-600 px-8 py-4 font-semibold text-white shadow-md transition hover:bg-rose-700"
            >
              Yes, I would love to
            </a>

            <button
              onClick={() => setShowInvitation(false)}
              className="rounded-full border border-rose-300 px-8 py-4 font-semibold text-rose-700 transition hover:bg-rose-50"
            >
              Back to Main Page
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}