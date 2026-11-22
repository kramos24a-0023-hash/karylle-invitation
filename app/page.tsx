import Image from "next/image";
import { cookies } from "next/headers";
import PasswordGate from "./password-gate";
import SurpriseNote from "./surprise-note";
import { hasValidAccessToken } from "../lib/access-token";
import { Great_Vibes, Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });


const qualities = [
  ["C", "Considerate", "You make room for other people’s feelings and perspectives."],
  ["H", "Hopeful", "You carry an outlook that helps others see possibility."],
  ["A", "Authentic", "You seem most yourself, and that honesty is refreshing."],
  ["R", "Resilient", "You keep moving through hard things with quiet strength."],
  ["M", "Mindful", "You give attention to the details and people around you."],
  ["A", "Admirable", "Your values show in the choices you make."],
  ["I", "Inquisitive", "Your questions and ideas make conversations meaningful."],
  ["N", "Nurturing", "You have a thoughtful way of making people feel welcome."],
  ["E", "Empathetic", "You try to understand what others are experiencing."],
];

const photos = [
  { src: "/photos/k4.jpg", caption: "A little moment worth remembering." },
  { src: "/photos/k2.jpg", caption: "A day by the water." },
  { src: "/photos/k1.jpg", caption: "One of those lovely snapshots." },
];

const songs = [
  { title: "The Most Beautiful Thing", artist: "Bruno Major", reason: "A gentle song for a thoughtful kind of admiration.", id: "07koEqsKHZTlGVMC9eoEjO" },
  { title: "Nothing", artist: "Bruno Major", reason: "For the comfort of simple, unhurried moments.", id: "1lORkxEMmsCZqhoxcmk3A3" },
  { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", reason: "A warm reminder to appreciate the good in someone.", id: "1RMJOxR6GRPsBHL8qeC2ux" },
  { title: "Those Eyes", artist: "New West", reason: "For the little details that stay with you.", id: "50x1Ic8CaXkYNvjmxe3WXy" },
  { title: "Until I Found You", artist: "Stephen Sanchez", reason: "A soft, sweet, old-school romantic feeling.", id: "0T5iIrXA4p5GsubkhuBIKV" },
  { title: "Heaven Knows", artist: "Orange & Lemons", reason: "A mellow song with a sincere, heartfelt sound.", id: "0Qra8Ps4tJAZPqRXyehCjc" },
];

export default async function Home() {
  const cookieStore = await cookies();
  const isUnlocked = await hasValidAccessToken(cookieStore.get("charmaine_access")?.value);

  if (!isUnlocked) {
    return <PasswordGate />;
  }

  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 text-rose-950`}>
      <header className="px-5 pb-12 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose-600 sm:text-sm">A letter for Charmaine</p>
            <h1 className={`${greatVibes.className} mt-4 text-6xl leading-tight text-rose-900 sm:text-7xl md:text-8xl`}>Dear Charmaine</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-rose-800 sm:text-xl">
              I wanted to make something that says what I mean, simply and honestly.
            </p>
            <nav aria-label="Page sections" className="mt-8 flex flex-wrap gap-3">
              <a href="#letter" className="rounded-full bg-rose-700 px-5 py-3 font-semibold text-white transition hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900">Read the letter</a>
              <a href="#songs" className="rounded-full border border-rose-300 bg-white px-5 py-3 font-semibold text-rose-800 transition hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900">Play the playlist</a>
            </nav>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.6rem] shadow-lg">
            <Image src="/photos/k4.jpg" alt="Charmaine by the seaside at sunset" width={700} height={900} priority className="max-h-[28rem] w-full object-cover" />
          </div>
        </div>
      </header>

      <section id="letter" className="scroll-mt-8 px-5 py-6 sm:px-8">
        <article className="mx-auto max-w-4xl rounded-[2rem] border border-rose-100 bg-white p-7 shadow-lg sm:p-10 md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-600 sm:text-sm">What I wanted to tell you</p>
          <h2 className={`${playfair.className} mt-3 text-3xl font-bold text-rose-950 sm:text-4xl`}>I’m interested in who you are.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            <p>Charmaine, I want to be honest about why I’m reaching out. I do find you attractive, but I don’t want that to be the center of this or the only thing I notice about you.</p>
            <p>I’m drawn to your substance: your character, your values, your ideas, and the way you see the world. I’d like to learn what matters to you, hear what you’re curious about, and understand the person you are becoming. Your mind and mindset are what I hope to know better.</p>
            <p>I’m not writing to pressure you or to expect anything in return. I’d just like the chance to get to know you with sincerity and respect, at a pace that feels comfortable for you. If you don’t feel the same, I’ll respect that too.</p>
            <p className="pt-2 font-semibold text-rose-900">With respect,<br />Someone who would like to know you better</p>
          </div>
        </article>
      </section>

      <SurpriseNote />

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-rose-100 bg-white p-7 shadow-lg sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-600 sm:text-sm">CHARMAINE</p>
          <h2 className={`${playfair.className} mt-2 text-3xl font-bold text-rose-950 sm:text-4xl`}>Nine qualities I appreciate</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {qualities.map(([letter, word, meaning], index) => (
              <div key={index} className="flex gap-4 rounded-2xl border border-rose-100 bg-rose-50 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-700 text-xl font-extrabold text-white">{letter}</span>
                <div><h3 className="font-bold text-rose-950">{word}</h3><p className="mt-1 text-sm leading-6 text-rose-800">{meaning}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-rose-800 p-7 text-white shadow-lg sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-200">A line to keep</p>
            <p className={`${greatVibes.className} mt-5 text-5xl leading-tight sm:text-6xl`}>“Love is patient and kind.”</p>
            <p className="mt-4 font-semibold text-rose-200">1 Corinthians 13:4</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {photos.map((photo, index) => <figure key={photo.src} className={`overflow-hidden rounded-2xl bg-white p-2 shadow-md ${index === 0 ? "col-span-2" : ""}`}>
              <Image src={photo.src} alt={photo.caption} width={700} height={900} className={`${index === 0 ? "h-64 sm:h-80" : "h-52 sm:h-64"} w-full rounded-xl object-cover`} />
              <figcaption className="px-2 py-3 text-sm text-rose-800">{photo.caption}</figcaption>
            </figure>)}
          </div>
        </div>
      </section>

      <section id="songs" className="scroll-mt-8 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-7 shadow-xl sm:p-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-rose-600 sm:text-sm">A playlist for a softer moment</p>
          <h2 className={`${playfair.className} mt-3 text-center text-3xl font-bold text-rose-950 sm:text-4xl`}>Songs I thought you might like</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-rose-800">A few sweet songs chosen for their warmth and sincerity.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {songs.map((song) => <article key={song.id} className="overflow-hidden rounded-2xl border border-rose-100 bg-rose-50 p-4">
              <iframe title={`${song.title} by ${song.artist}`} src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator`} width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="rounded-xl" />
              <h3 className={`${playfair.className} mt-4 text-xl font-bold text-rose-950`}>{song.title}</h3>
              <p className="mt-1 text-sm font-semibold text-rose-700">{song.artist}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{song.reason}</p>
            </article>)}
          </div>
        </div>
      </section>

      <footer className="px-5 pb-10 pt-4 text-center text-sm text-rose-700">Made with care for Charmaine.</footer>
    </main>
  );
}
