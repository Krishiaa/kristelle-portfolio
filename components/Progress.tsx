 "use client";
import {motion,useScroll,useSpring} from "framer-motion";
export default function Progress(){const {scrollYProgress}=useScroll();const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30,restDelta:.001});return <motion.div style={{scaleX,transformOrigin:"0%"}} className="fixed left-0 right-0 top-0 z-[60] h-1 bg-hotpink"/>}