 "use client";
import Image from "next/image";
import {motion,useReducedMotion} from "framer-motion";
import {content} from "@/data/content";
import {SectionTitle} from "./Motion";
export default function About(){const reduce=useReducedMotion();return <section id="about" className="bg-blush/50 px-5 pb-20 pt-28"><div className="mx-auto max-w-6xl"><SectionTitle eyebrow="A little about me" title="Who Am I?"/><div className="grid items-center gap-10 md:grid-cols-[.8fr_1.2fr]"><motion.div initial={reduce?false:{opacity:0,x:-35}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.7,ease:"easeOut"}} className="relative mx-auto w-full max-w-sm">
    <div className="absolute -inset-3 rounded-3xl bg-pink/60"/><div className="relative aspect-[4/4.5] overflow-hidden rounded-3xl bg-white">
    <Image src="/me.png" alt="Kristelle profile photo placeholder" fill className="object-cover"/></div></motion.div>
    <motion.div initial={reduce?false:{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.7,ease:"easeOut"}}>
        <p className="text-lg leading-8 text-muted">{content.summary}</p>
        <div className="mt-6 rounded-2xl border border-pink/60 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-hotpink">Education</p>
        <p className="mt-2 font-semibold">{content.education}</p>
        <p className="mt-2 text-sm text-muted">My English major supports clear written and spoken communication.</p></div></motion.div></div></div></section>}