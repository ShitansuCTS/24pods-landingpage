import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import "./App.css";

export const MQ = [
  "PODCAST EDITING",
  "REELS CREATION",
  "VIDEO PRODUCTION",
  "AUDIO MASTERING",
  "SOCIAL CLIPS",
  "DONE FOR YOU"
];

export const SERVICES = [
  {
    icon: "🎧",
    num: "01",
    name: "Podcast Editing",
    desc: "Professional audio post-production that makes your podcast sound like it belongs in the top charts. We remove noise, tighten pacing, balance levels, and deliver platform-ready files.",
    features: [
      "Noise & echo removal",
      "Filler word & silence editing",
      "Volume levelling & mastering",
      "Intro/outro music integration",
      "Spotify, Apple & YouTube export"
    ]
  },
  {
    icon: "📱",
    num: "02",
    name: "Reels & Short-Form",
    desc: "We find the gold in your episode and cut it into thumb-stopping short-form content for Instagram, TikTok, YouTube Shorts, and LinkedIn — captioned, branded, scroll-optimised.",
    features: [
      "AI-assisted highlight selection",
      "Burned-in captions & subtitles",
      "Brand colours & logo overlay",
      "Vertical & square formats",
      "Platform-optimised delivery"
    ]
  },
  {
    icon: "🎬",
    num: "03",
    name: "Full Video Production",
    desc: "End-to-end video podcast editing — from raw multi-cam footage to a polished, branded episode ready to publish on YouTube and beyond. This is your show, produced properly.",
    features: [
      "Multi-camera editing",
      "Colour grading & b-roll",
      "Lower thirds & motion graphics",
      "Thumbnail design",
      "YouTube SEO-ready delivery"
    ]
  }
];

export const STEPS = [
  {
    num: "01",
    title: "Record Your Way",
    desc: (
      <>
        Use your own setup, record remotely via Riverside or Zencastr, or{" "}
        <span className="luxe-highlight">
          shoot at one of our partner studios in Sydney
        </span>
        . We work with whatever you bring us.
      </>
    )
  },
  {
    num: "02",
    title: "We Edit",
    desc:
      "Our team handles all audio and video post-production — editing, mastering, captioning, graphics, and formatting. Every detail, handled."
  },
  {
    num: "03",
    title: "Reels Created",
    desc:
      "We pull the best moments from your episode and package them into branded, captioned short-form clips ready to post across every platform."
  },
  {
    num: "04",
    title: "You Publish",
    desc:
      "Receive your finished episode file plus all social content — ready to upload directly to Spotify, Apple, YouTube, and Instagram."
  }
];

export const PLATFORMS = [
  "Spotify",
  "Apple Podcasts",
  "YouTube",
  "YouTube Shorts",
  "Instagram Reels",
  "TikTok",
  "LinkedIn Video",
  "Facebook",
  "Amazon Music",
  "iHeartRadio",
  "Podbean",
  "Buzzsprout"
];

export const FAQS = [
  {
    q: "What exactly does 24Pods do?",
    a: "24Pods is a Sydney-based podcast production studio offering three core services: full podcast audio editing, short-form reels and social media clip creation, and complete video podcast post-production. We're a done-for-you service — you record, we handle the rest."
  },
  {
    q: "Where is 24Pods based?",
    a: "24Pods is based in Sydney, NSW, Australia. We serve clients across Sydney and all of Australia, working remotely via file delivery. You can find us at 24pods.com.au."
  },
  {
    q: "Do I need my own studio to record with 24Pods?",
    a: "No. 24Pods has partnerships with professional recording studios across Sydney — so if you don't have your own setup, you can book a shoot at one of our partner studios. We'll coordinate the session and handle all post-production from there."
  },
  {
    q: "How does the podcast editing process work?",
    a: "You record and send us your raw audio or video files. We edit them — removing noise, filler words, and dead air; balancing levels; and adding intros, outros, and any branded elements. You receive a polished, platform-ready file back within the agreed turnaround time."
  },
  {
    q: "Can 24Pods create reels and short-form clips from my podcast?",
    a: "Yes — this is one of our specialities. We identify the most shareable moments in your episode, clip them, add captions, and format them for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn. Every clip is branded and ready to post."
  },
  {
    q: "Do you work with video podcasts?",
    a: "Absolutely. We offer full video podcast post-production: multi- camera editing, colour grading, b-roll, lower thirds, motion graphics, and thumbnail design. Whether you're recording on one camera or four, we produce a broadcast-quality final video episode."
  },
  {
    q: "Do you only serve clients in Sydney?",
    a: "No — 24Pods serves creators and brands across all of Australia. While we're based in Sydney, all our work is delivered digitally, so location is no barrier. We work with clients from Melbourne, Brisbane, Perth, and beyond. Melbourne, Brisbane, Perth, and beyond."
  },
  {
    q: "How do I get started with 24Pods?",
    a: "Visit 24pods.com.au and get in touch. We'll talk through your podcast, your goals, and put together the right package for you. There's no complex onboarding — just great production, fast."
  }
];

// Scroll Animation Hook
const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useScrollAnimation();

  return (
    <>
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Home
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
        MQ={MQ}
        SERVICES={SERVICES}
        STEPS={STEPS}
        PLATFORMS={PLATFORMS}
        FAQS={FAQS}
      />

      <Footer />
    </>
  );
}