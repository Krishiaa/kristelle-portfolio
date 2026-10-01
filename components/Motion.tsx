 "use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:reduce?0:.65,delay:reduce?0:delay,ease:"easeOut"}}>{children}</motion.div>;
}
export function SectionTitle({eyebrow,title}:{eyebrow:string;title:string}) {
 return <div className="mb-10"><span className="inline-flex rounded-full border border-pink/70 bg-blush px-4 py-2 text-xs font-bold uppercase tracking-[.2em]">{eyebrow}</span><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2></div>;
}