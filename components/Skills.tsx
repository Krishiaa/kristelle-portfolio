 "use client";
import {motion,useReducedMotion} from "framer-motion";
import {content} from "@/data/content";
import {SectionTitle} from "./Motion";
export default function Skills(){const reduce=useReducedMotion();return <section id="skills" className="bg-blush/40 px-5 py-24">
    <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="My strengths" title="Skills"/>
        <div className="grid gap-8 md:grid-cols-2">{[{title:"Customer Support",items:content.customerSkills},{title:"Interpersonal",items:content.peopleSkills}].map(group=><div key={group.title} className="rounded-3xl bg-white p-7">
            <h3 className="mb-5 text-2xl font-semibold">{group.title}</h3>
            <div className="flex flex-wrap gap-3">{group.items.map((tag,i)=><motion.span key={tag} initial={reduce?false:{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.3}} transition={{duration:.5,delay:reduce?0:i*.05,ease:"easeOut"}} className="rounded-full border border-pink/70 bg-paper px-4 py-2 text-sm font-medium">{tag}</motion.span>)}</div></div>)}</div>
            </div>
            </section>}