import { Geist, Archivo , Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata = {
  title: "Troscan — Framer Clone",
  description: "Skill assessment clone built with Next.js, Tailwind, Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-sans bg-[rgb(248,237,227)]`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
