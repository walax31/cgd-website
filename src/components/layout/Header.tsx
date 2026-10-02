import Image from "next/image";
import type { SVGProps } from "react";
import { ChevronDown, Network } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaThreads,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Container from "@/components/ui/Container";
import Navbar from "./Navbar";

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "X", icon: FaXTwitter },
  { label: "LINE", icon: FaLine },
  { label: "YouTube", icon: FaYoutube },
  { label: "Instagram", icon: FaInstagram },
  { label: "TikTok", icon: FaTiktok },
  { label: "Threads", icon: FaThreads },
];

const headerLogo = "/images/logo.png";

function ThailandFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 19" role="img" aria-label="ธงประเทศไทย" {...props}>
      <rect width="28" height="19" rx="1" fill="#d71920" />
      <rect y="3" width="28" height="3" fill="#ffffff" />
      <rect y="6" width="28" height="7" fill="#241d8c" />
      <rect y="13" width="28" height="3" fill="#ffffff" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="relative z-20 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
      <Container className="lg:max-w-[1518px]">
        <div className="grid min-h-[132px] grid-cols-1 items-center gap-5 py-5 lg:grid-cols-[1fr_auto_1fr] lg:py-0">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="leading-tight">
              <div className="text-[16px] font-medium text-[var(--cgd-primary)]">
                Call Center
              </div>
              <div className="text-[22px] font-semibold text-[#35c5b2]">
                0-2270-6400
              </div>
            </div>

            <div className="flex items-center gap-6 text-[var(--cgd-primary)]">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href="#"
                    className="flex h-5 w-5 items-center justify-center transition hover:text-[#35c5b2]"
                    aria-label={item.label}
                  >
                    <Icon className="text-[16px]" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center">
            <Image
              src={headerLogo}
              alt="กรมบัญชีกลาง"
              width={62}
              height={62}
              className="h-[62px] w-[62px] object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-3 text-[17px] font-medium text-[#555] lg:justify-end">
            <a href="#" className="transition hover:text-[var(--cgd-primary)]">
              เข้าสู่ระบบ
            </a>
            <span className="h-6 w-px bg-[var(--cgd-primary)]" />
            <a href="#" className="transition hover:text-[var(--cgd-primary)]">
              CGD Intranet
            </a>
            <span className="h-6 w-px bg-[var(--cgd-primary)]" />
            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-[var(--cgd-primary)]"
            >
              <ThailandFlagIcon className="h-[19px] w-[28px] shrink-0 overflow-hidden rounded-[1px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]" />
              ไทย
              <ChevronDown className="h-4 w-4 text-[#aaa]" />
            </a>
            <span className="h-6 w-px bg-[var(--cgd-primary)]" />
            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-[var(--cgd-primary)]"
            >
              <Network
                className="h-5 w-5 text-[#35c5b2]"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              แผนผังเว็บไซต์
            </a>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-[-30px] z-30 hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <Navbar />
      </div>
    </header>
  );
}
