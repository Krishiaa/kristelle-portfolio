"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";
import { SectionTitle } from "./Motion";

const experienceImages = [
  "/e1.png",
  "/e2.png",
  "/e3.png",
];

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-blush/40 px-5 py-24 md:py-32"
    >
      {/* Soft decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-hotpink/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="My journey so far"
          title="Work Experience"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-xl text-center text-sm leading-7 text-muted sm:text-base"
        >
          Every role has helped me grow, connect with people,
          and build the skills I bring to my work today.
        </motion.p>

        <div className="relative">
          {/* Animated timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-5 left-[11px] top-0 w-[2px] bg-hotpink/50 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-20">
            {content.experience.map((job, i) => (
              <motion.article
                key={job.company}
                initial={
                  reduce
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                        x: i % 2 === 0 ? -20 : 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: reduce ? 0 : 0.08,
                  ease: "easeOut",
                }}
                className={`relative pl-10 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-14"
                    : "md:ml-auto md:pl-14"
                }`}
              >
                {/* Timeline dot */}
                <motion.span
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 15,
                    delay: 0.15,
                  }}
                  className={`absolute left-[4px] top-8 z-10 h-4 w-4 rounded-full border-[3px] border-white bg-hotpink shadow-[0_0_0_4px_rgba(236,72,153,0.12)] md:left-auto ${
                    i % 2 === 0
                      ? "md:-right-[8px]"
                      : "md:-left-[8px]"
                  }`}
                />

                {/* Experience card */}
                <motion.div
                  whileHover={
                    reduce ? undefined : { y: -7 }
                  }
                  transition={{ duration: 0.25 }}
                  className="group overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_12px_40px_rgba(80,30,55,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(80,30,55,0.13)]"
                >
                  {/* Workplace photo */}
                  <div className="relative h-[500px] w-full overflow-hidden rounded-t-[28px] bg-pink-100 sm:h-[540px]">
                    <Image
                      src={
                        experienceImages[
                          i % experienceImages.length
                        ]
                      }
                      alt={`${job.company} workplace`}
                      fill
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Experience label */}
                    <span className="absolute bottom-4 left-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold text-ink backdrop-blur-sm">
                      EXPERIENCE 0{i + 1}
                    </span>
                  </div>

                  {/* Experience information */}
                  <div className="p-6 sm:p-8">
                    {/* Company and date */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-hotpink">
                          {job.account}
                        </p>

                        <h3 className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
                          {job.company}
                        </h3>
                      </div>

                      <span className="rounded-full bg-blush px-3 py-2 text-xs font-bold text-ink">
                        {job.date}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-bold text-hotpink">
                      {job.title}
                    </p>

                    <div className="my-5 h-px w-full bg-pink-100" />

                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ink/50">
                      What I did
                    </p>

                    <ul className="space-y-3">
                      {job.items.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={
                            reduce
                              ? false
                              : { opacity: 0, x: -8 }
                          }
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay:
                              0.15 + itemIndex * 0.08,
                          }}
                          className="flex gap-3 text-sm leading-7 text-muted"
                        >
                          <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-hotpink" />

                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing detail */}
        <motion.div
          initial={
            reduce
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-hotpink/20 bg-white/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-hotpink">
            <span className="h-2 w-2 rounded-full bg-hotpink" />
            Always learning, always growing
          </span>
        </motion.div>
      </div>
    </section>
  );
}