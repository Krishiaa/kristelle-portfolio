 "use client";
import {motion,useReducedMotion} from "framer-motion";
import {Headset,PackageCheck,Wallet,ShoppingBag} from "lucide-react";
import {content} from "@/data/content";
import {SectionTitle} from "./Motion";
const icons=[Headset,PackageCheck,Wallet,ShoppingBag];
export default function Services(){const reduce=useReducedMotion();return
     <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="How I can contribute" title="What I Can Do"/>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{content.services.map((s,i)=>{const Icon=icons[i];return <motion.article key={s.title} initial={reduce?false:{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.6,delay:reduce?0:i*.08,ease:"easeOut"}} whileHover={reduce?{}:{y:-7}} className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(23,19,23,.05)]">
            <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-blush text-hotpink">
                <Icon size={23}/></div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{s.desc}</p></motion.article>})}</div></div></section>}