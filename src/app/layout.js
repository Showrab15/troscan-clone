import { Archivo } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: "Troscan — Framer Clone",
  description:
    "Skill assessment clone built with Next.js, Tailwind, Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-sans bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
