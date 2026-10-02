
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-[780px] overflow-hidden bg-[#f4c6dc] px-5 py-16 md:px-10 md:py-24"
    >
      {/* Six vertical white panels */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1] grid grid-cols-6 gap-3 px-3 md:gap-6 md:px-8"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-full bg-white/90"
          />
        ))}
      </div>

      {/* Soft pink overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1] bg-pink/10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:min-h-[620px] md:grid-cols-2">
        {/* Introduction and words */}
        <div className="relative z-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-hotpink"
          >
            Hello, welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-6xl font-black leading-[0.95] tracking-[-0.07em] text-ink sm:text-7xl md:text-8xl"
          >
            Hi, I am
            <br />
            <span className="text-hotpink">Kristelle.</span>
          </motion.h1>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-lg text-lg font-bold leading-relaxed text-ink sm:text-xl"
          >
            {content.role}
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-5 max-w-xl text-sm leading-8 text-ink/70 sm:text-base"
          >
            {content.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/kristelle-resume.docx"
              className="rounded-full bg-hotpink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-ink"
            >
              Download Resume ↓
            </a>

            <a
              href="#contact"
              className="rounded-full border border-ink/25 bg-white/70 px-6 py-3.5 text-sm font-bold text-ink transition hover:border-hotpink hover:text-hotpink"
            >
              Contact Me ↗
            </a>
          </motion.div>

          <p className="mt-7 text-xs font-semibold tracking-wide text-ink/60">
            BASED IN {content.location.toUpperCase()}
          </p>
        </div>

        {/* Main portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Decorative pink frame */}
          <div className="absolute -right-4 -top-4 h-full w-full rounded-t-[45%] rounded-b-3xl bg-hotpink/20 md:-right-6 md:-top-6" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[45%] rounded-b-3xl border-[7px] border-white bg-white shadow-xl">
            <Image
              src="/prof.png"
              alt="Portrait of Kristelle"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>

          <span className="absolute -bottom-5 left-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white shadow-lg md:-left-8">
            Here to help. Here to grow.
          </span>

          <span className="absolute right-0 top-8 rounded-full bg-white px-4 py-2 text-xs font-bold text-hotpink shadow-md md:-right-5">
            ✳ Open to opportunities
          </span>
        </motion.div>
      
      </div>
    </section>
  );
}