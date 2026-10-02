import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { importantBanners, interestItems } from "@/data/data";
import type {
  ImportantBanner as ImportantBannerItem,
  InterestItem,
} from "@/types/types";

function readableText(value: string) {
  return value.replace(/\n/g, " ");
}

function Dots({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-2.5 w-9 rounded-full bg-[#35c5b2]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e3e3e3]" />
    </div>
  );
}

function ImportantBanner({
  item,
}: {
  item: ImportantBannerItem;
}) {
  const ariaLabel = `${readableText(item.title)} ${item.subtitle}`;

  return (
    <a
      href={item.href}
      className="group relative block aspect-[1252/368] overflow-hidden rounded-[16px] bg-[#eaf3ff] shadow-[0_12px_28px_rgba(21,87,184,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(21,87,184,0.14)] lg:w-[416px]"
      aria-label={ariaLabel}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient}`} />

      <div className="absolute inset-y-0 left-0 w-[35%] overflow-hidden">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 146px, (min-width: 640px) 12vw, 35vw"
          className="object-cover object-left transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.22),transparent_45%)]" />

      <div className="relative z-10 flex h-full items-center px-8 sm:px-10">
        <div className="w-[42%] shrink-0" />
        <div className={item.textClass}>
          <h3 className="whitespace-pre-line text-[26px] font-semibold leading-[1.12]">
            {item.title}
          </h3>
          <p className="mt-2 text-[17px] leading-tight opacity-90">
            {item.subtitle}
          </p>
        </div>
      </div>
    </a>
  );
}

function InterestCard({
  item,
}: {
  item: InterestItem;
}) {
  const title = readableText(item.title);

  return (
    <a
      href={item.href}
      className="group relative block aspect-square overflow-hidden rounded-[16px] bg-[#eaf3ff] shadow-[0_12px_28px_rgba(21,87,184,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(21,87,184,0.14)]"
      aria-label={title}
    >
      <Image
        src={item.image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 174px, (min-width: 640px) 25vw, 50vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  );
}

export default function ImportantInfoSection() {
  return (
    <section className="bg-white pb-12 pt-2 md:pb-16">
      <Container className="lg:max-w-[1440px]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-[repeat(3,416px)] lg:justify-center lg:gap-x-6">
          {importantBanners.map((item) => (
            <ImportantBanner key={item.title} item={item} />
          ))}
        </div>

        <Dots className="mt-5" />

        <SectionTitle
          title="ข้อมูลอื่นๆ ที่น่าสนใจ"
          description="รวบรวมแหล่งข้อมูลเพิ่มเติมที่อาจเป็นประโยชน์"
          className="mt-8"
        />

        <div className="mx-auto mt-8 grid max-w-[1320px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(7,174px)] lg:justify-center lg:gap-x-4">
          {interestItems.map((item) => (
            <InterestCard key={item.title} item={item} />
          ))}
        </div>

        <Dots className="mt-5" />
      </Container>
    </section>
  );
}
