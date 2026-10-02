import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Eye,
  Files,
  Presentation,
  Share2,
  UserPlus,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { newsCategories, newsItems } from "@/data/data";
import type { NewsCategory, NewsItem } from "@/types/types";

const newsMeta = [
  { id: "date", icon: CalendarDays, label: "9 ธ.ค. 67" },
  { id: "views", icon: Eye, label: "999k" },
  { id: "shares", icon: Share2, label: "999k" },
];

function CategoryIcon({
  name,
}: {
  name: NewsCategory["icon"];
}) {
  if (name === "recruitment") {
    return <UserPlus className="h-8 w-8" strokeWidth={2.2} />;
  }

  if (name === "training") {
    return <Presentation className="h-8 w-8" strokeWidth={2.2} />;
  }

  return <Files className="h-8 w-8" strokeWidth={2.2} />;
}

function CategoryButton({ category }: { category: NewsCategory }) {
  return (
    <button
      type="button"
      className={`
        flex h-[59px] w-full items-center justify-center gap-3
        rounded-full px-5 text-left transition sm:w-[200px]
        ${category.active ? "sm:w-[255px]" : ""}
        ${
          category.active
            ? "bg-[var(--cgd-primary)] text-white shadow-[0_14px_28px_rgba(3,76,189,0.22)]"
            : "bg-white text-[var(--cgd-primary)] shadow-[0_10px_26px_rgba(64,109,175,0.08)]"
        }
      `}
      aria-pressed={category.active}
    >
      <span className={category.active ? "text-[#35c5b2]" : "text-[#48c8bb]"}>
        <CategoryIcon name={category.icon} />
      </span>
      <span>
        <span className="block text-[17px] font-medium leading-tight">
          {category.title}
        </span>
        <span
          className={`mt-1 block text-[13px] leading-tight ${
            category.active ? "text-white/80" : "text-[#aaa]"
          }`}
        >
          {category.subtitle}
        </span>
      </span>
    </button>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="mx-auto flex w-full max-w-[365px] flex-col overflow-hidden rounded-[18.96px] bg-white px-[9.48px] pb-[18.96px] pt-[9.48px] shadow-[0_16px_40px_rgba(23,86,161,0.08)] md:h-[387.95px]">
      <a href="#" className="flex h-full flex-col gap-[9.48px]">
        <div className="relative h-[210px] shrink-0 overflow-hidden rounded-[12px] bg-[#dcecff]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 346px, 100vw"
            className="object-cover"
          />
        </div>

        <h3 className="line-clamp-2 text-[18px] font-semibold leading-[1.25] text-[#202124]">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-[14px] leading-[1.25] text-[#666]">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-[#4b5563]">
            {newsMeta.map(({ id, icon: Icon, label }) => (
              <span key={id} className="flex items-center gap-1 text-[#4cc7bc]">
                <Icon
                  className="h-4 w-4"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span className="text-[#4b5563]">{label}</span>
              </span>
            ))}
          </div>

          <span className="flex shrink-0 items-center gap-2 text-[16px] font-medium text-[#35c5b2]">
            อ่านต่อ
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-[#f3f8ff] py-12 md:py-14">
      <Container className="lg:max-w-[1340px]">
        <SectionTitle
          title="ข่าวสารอัปเดตกรมบัญชีกลาง"
          description="อัปเดตเหตุการณ์ทางการเงินปัจจุบัน รับรู้ข่าวสารองค์กรตลอด 24 ชม"
          accentClassName="hidden"
        />

        <div className="mx-auto mt-7 flex w-full max-w-[695px] flex-wrap justify-center gap-3 sm:flex-nowrap sm:gap-5">
          {newsCategories.map((category) => (
            <CategoryButton key={category.title} category={category} />
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-[1135px] gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-6 flex justify-center text-white">
          <a
            href="#"
            className="inline-flex w-[253px] h-[48px] items-center justify-center gap-[10px] rounded-[10px] bg-[var(--cgd-primary)] px-[36px] py-[15px] text-[16px] leading-none text-white shadow-[0_12px_28px_rgba(3,76,189,0.2)] transition hover:bg-[#023F9F]"
          >
            ข่าวสารประชาสัมพันธ์ทั้งหมด
          </a>
        </div>
      </Container>
    </section>
  );
}
