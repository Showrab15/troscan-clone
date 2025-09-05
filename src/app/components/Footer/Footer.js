// src/components/footer/Footer.tsx
import Link from "next/link";

const sitemapLinks = ["About", "Projects", "News", "Contact"];
const socialLinks = ["Facebook", "Instagram", "LinkedIn", "Twitter"];
const moreLinks = ["License", "Grainient", "Inspirux", "Store"];

export default function Footer() {
  return (
    <footer className="bg-[#8C4B3D] text-white pt-[70px] md:pt-[100px] pb-[30px] px-[16px]  md:px-[50px]  ">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-center text-[12px] md:text-[20px] font-bold mb-[30px] md:mb-[70px] text-[#F8EDE3]">Troscán</h2>
        <div className="flex flex-nowrap flex-col md:flex-row justify-center gap-[30px] md:gap-[100px]">
          
          <div>
            <p className=" text-[14px] font-normal md:mb-[20px] mb-[10px] text-[#F8EDE3B2]">Sitemap</p>
            <ul className="space-y-1">
              {sitemapLinks.map((link) => (
                <li className="text-[12px] md:text-[28px] font-normal text-white hover:text-[#F8EDE3C9]" key={link}>
                  <Link href="#" >{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className=" text-[14px] font-normal md:mb-[20px] mb-[10px] text-[#F8EDE3B2]">Socials</p>
            <ul className="space-y-1">
              {socialLinks.map((link) => (
                <li className="text-[12px] md:text-[28px] font-normal text-white hover:text-[#F8EDE3C9]" key={link}>
                  <Link href="#" >{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className=" text-[14px] font-normal md:mb-[20px] mb-[10px] text-[#F8EDE3B2]">More</p>
            <ul className="space-y-1">
              {moreLinks.map((link) => (
                <li className="text-[12px] md:text-[28px] font-normal text-white hover:text-[#F8EDE3C9]" key={link}>
                  <Link href="#" >{link}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="border-t border-[#F8EDE380] my-8" />

        <p className="text-[#F8EDE3B2] text-sm text-center ">&copy; {new Date().getFullYear()}, All rights reserved</p>

        
      </div>
    </footer>
  );
}
