import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
const playfair = Playfair_Display({ subsets:["latin"], variable:"--font-heading", display:"swap" });
const inter = Inter({ subsets:["latin"], variable:"--font-body", display:"swap" });
export const metadata: Metadata = {
  title: "Kristelle Jan Mumar | Customer Service Portfolio",
  description: "Portfolio of Kristelle Jan Mumar, a customer service professional preparing for BPO opportunities.",
  openGraph: { title:"Kristelle Jan Mumar | Customer Service Portfolio", description:"Customer service experience across telecom, retail, and food service.", type:"website" }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body className={`${playfair.variable} ${inter.variable}`}>{children}</body></html>;
}