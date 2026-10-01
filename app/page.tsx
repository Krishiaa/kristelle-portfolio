import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Progress from "@/components/Progress";
export default function Home() {
 return <><Progress/><Navbar/><main><Hero/><Stats/><About/><Services/><Experience/><WhyMe/><Skills/><Certificates/><Contact/></main><Footer/></>;
}