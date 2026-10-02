
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";
import { SectionTitle } from "./Motion";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="bg-blush/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-hotpink">
            A little about me
          </p>

          <h2 className="text-5xl font-black leading-[1] tracking-[-.06em] text-ink sm:text-6xl md:text-7xl">
            More than a
            <br />
            <span className="text-hotpink">resume.</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-hotpink/20" />

            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-white">
              <Image
                src="/me.png"
                alt="Kristelle profile photo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-lg leading-9 text-ink/75">
              {content.summary}
            </p>

            <div className="mt-10 border-t border-hotpink/30 pt-7">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-hotpink">
                Education
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-ink">
                {content.education}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-8 text-muted">
                My English major supports clear written and spoken
                communication, helping me connect with people and
                understand their needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}