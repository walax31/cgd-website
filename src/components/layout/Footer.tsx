import Image from "next/image";
import {
  Headphones,
  Mail,
  MapPin,
  Phone,
  Printer,
  Send,
  type LucideIcon,
} from "lucide-react";
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

const footerHero = {
  image: "/images/footer.png",
  alt: "ซื่อสัตย์ โปร่งใส บริการด้วยใจ รักษาวินัยการคลัง รวมพลังพันธมิตร มีหลักคิดพัฒนา",
};

const siteMapColumns = [
  ["ข้อมูลองค์กร", "ผู้บริหาร", "ข่าวสารอัปเดต"],
  ["เว็บไซต์คลังเขต/จังหวัด", "ติดต่อเราองค์กร", "ระบบรับเรื่องร้องเรียน"],
];

const contactItems = [
  {
    icon: Mail,
    title: "callcenter@cgd.go.th",
    description: "สำหรับสอบถามปัญหาทั่วไป",
  },
  {
    icon: Mail,
    title: "saraban@cgd.go.th",
    description: "สำหรับรับ-ส่งเอกสารทางราชการ",
  },
  {
    icon: Phone,
    title: "0-2127-7000",
    description: "เบอร์โทรศัพท์กลาง",
  },
  {
    icon: Printer,
    title: "02-127-7142",
    description: "FAX",
  },
] satisfies {
  icon: LucideIcon;
  title: string;
  description: string;
}[];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "X", icon: FaXTwitter },
  { label: "LINE", icon: FaLine },
  { label: "YouTube", icon: FaYoutube },
  { label: "Instagram", icon: FaInstagram },
  { label: "TikTok", icon: FaTiktok },
  { label: "Threads", icon: FaThreads },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="42px"
          className="object-contain [filter:brightness(0)_invert(1)]"
        />
      </div>
      <div className="min-w-0">
        <div className="whitespace-nowrap text-[24px] font-semibold leading-none text-white">
          กรมบัญชีกลาง
        </div>
        <div className="mt-1 whitespace-nowrap text-[10px] leading-none text-white/78">
          The Comptroller General&apos;s Department
        </div>
      </div>
    </div>
  );
}

function NewsletterBar() {
  return (
    <Container className="lg:max-w-[1440px]">
      <div className="relative z-10 -mb-8 overflow-hidden rounded-[7px] bg-[var(--cgd-primary)] shadow-[0_8px_18px_rgba(3,76,189,0.16)]">
        <div className="grid items-center lg:min-h-[72px] lg:grid-cols-[300px_224px_minmax(420px,1fr)_286px]">
          <div className="flex h-full items-center bg-[#023F9F] px-7 py-4 lg:py-0">
            <BrandMark />
          </div>

          <div className="px-4 py-4 text-white lg:py-0">
            <div className="text-[19px] font-medium leading-tight">
              ลงทะเบียนรับข่าวสาร
            </div>
            <div className="mt-0.5 text-[14px] leading-tight text-white/78">
              CGD NEWSLETTER
            </div>
          </div>

          <form className="flex min-w-0 px-4 py-4 lg:py-0">
            <label className="sr-only" htmlFor="newsletter-email">
              กรุณากรอกอีเมล
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="กรุณากรอกอีเมล"
              className="h-[52px] min-w-0 flex-1 rounded-l-[4px] border-0 bg-white px-5 text-[15px] text-[#333] outline-none placeholder:text-[#aaa]"
            />
            <button
              type="submit"
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-r-[4px] bg-[#ffc22f] text-white transition hover:bg-[#f4b51d]"
              aria-label="สมัครรับข่าวสาร"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-3 px-6 py-4 text-white lg:justify-start lg:py-0">
            <Headphones
              className="h-11 w-11"
              strokeWidth={2.4}
              aria-hidden="true"
            />
            <div>
              <div className="text-[14px] leading-tight">Call Center</div>
              <div className="text-[30px] font-medium leading-none text-[#35e0e7]">
                0-2270-6400
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function SkylinePanel() {
  return (
    <Container className="lg:max-w-[1518px]">
      <div className="relative mx-auto aspect-[3456/572] max-w-[1440px] overflow-hidden rounded-[20px] bg-[#eaf8ff]">
        <Image
          src={footerHero.image}
          alt={footerHero.alt}
          fill
          sizes="(min-width: 1024px) 1440px, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </Container>
  );
}

function ContactInfoItem({ item }: { item: (typeof contactItems)[number] }) {
  const Icon = item.icon;

  return (
    <div className="flex gap-3 text-[#35c5b2]">
      <Icon className="h-8 w-8 shrink-0" strokeWidth={2.4} aria-hidden="true" />
      <div>
        <div className="text-[18px] font-medium leading-tight text-[var(--cgd-primary)]">
          {item.title}
        </div>
        <div className="text-[13px] text-[#888]">{item.description}</div>
      </div>
    </div>
  );
}

function FooterMain() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f2fdff_18%,#b8f0ff_100%)] pt-16">
      <div className="absolute bottom-0 left-0 h-[170px] w-[34%] rounded-tr-full bg-white/70 blur-[1px]" />
      <div className="absolute bottom-0 right-0 h-[185px] w-[36%] rounded-tl-full bg-white/72 blur-[1px]" />

      <Container className="relative lg:max-w-[1440px]">
        <div className="mx-auto grid max-w-[1320px] gap-9 py-10 lg:grid-cols-[1.35fr_1.05fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex gap-4 text-[#35c5b2]">
              <MapPin
                className="h-9 w-9 shrink-0"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[22px] font-semibold leading-tight text-[var(--cgd-primary)]">
                  กรมบัญชีกลาง
                </h3>
                <p className="mt-1 max-w-[430px] text-[16px] leading-[1.35] text-[#777]">
                  กระทรวงการคลัง ถนนพระรามที่ 6 แขวงพญาไท เขตพญาไท
                  กรุงเทพมหานคร 10400
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {contactItems.map((item) => (
                <ContactInfoItem key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-[var(--cgd-primary)]">
              แผนผังเว็บไซต์
            </h3>
            <div className="mt-4 grid gap-8 sm:grid-cols-2">
              {siteMapColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-3">
                  {column.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-[16px] text-[#8a8a8a] transition hover:text-[var(--cgd-primary)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#35c5b2]" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-[16px] text-[#9a9a9a]">
                  จำนวนผู้เยี่ยมชมเว็บไซต์
                </div>
                <div className="mt-2 text-[29px] font-semibold leading-none text-[var(--cgd-primary)]">
                  78,904,323
                </div>
              </div>
              <div>
                <div className="text-[16px] text-[#9a9a9a]">
                  จำนวนผู้ชมวันนี้
                </div>
                <div className="mt-2 text-[29px] font-semibold leading-none text-[var(--cgd-primary)]">
                  3,514
                </div>
              </div>
            </div>

            <div className="mt-9 flex h-[40.53px] w-[298px] items-center justify-between">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href="#"
                    className="flex h-[40.53px] w-[40.53px] items-center justify-center text-[var(--cgd-primary)] transition hover:text-[#35c5b2]"
                    aria-label={item.label}
                  >
                    <Icon className="text-[16.69px]" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <div className="relative bg-[var(--cgd-primary)] py-6 text-center text-white">
        <Container className="lg:max-w-[1440px]">
          <p className="text-[15px] leading-[1.8]">
            สงวนลิขสิทธิ์ โดยกรมบัญชีกลาง กระทรวงการคลัง พ.ศ. 2568 ตาม
            พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537
          </p>
          <p className="text-[15px] leading-[1.8] text-white/78">
            เงื่อนไขในการให้บริการเว็บไซต์ : Website Policy | Privacy Policy |
            Privacy Notice | Website Security Policy
          </p>
        </Container>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <SkylinePanel />
      <NewsletterBar />
      <FooterMain />
    </footer>
  );
}
