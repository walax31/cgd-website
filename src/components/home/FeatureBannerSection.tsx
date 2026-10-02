import Image from "next/image";

import Container from "@/components/ui/Container";
import { featureBanners } from "@/data/data";
import type { FeatureBanner } from "@/types/types";

function FeatureBannerCard({ item }: { item: FeatureBanner }) {
  return (
    <a
      href={item.href}
      className="group relative block h-[155px] overflow-hidden rounded-[30px] bg-[#eaf3ff] shadow-[0_12px_28px_rgba(21,87,184,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(21,87,184,0.14)] sm:h-[165px] lg:h-[165px] lg:w-[416px]"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 416px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute left-5 top-6 z-10 flex max-w-[64%] flex-col sm:left-6 sm:top-7 lg:left-[25px] lg:top-[31px]">
        <h3
          className={`text-[clamp(22px,5.8vw,28px)] font-medium leading-[1.12] tracking-normal lg:text-[26px] ${item.titleClassName}`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-1 whitespace-pre-line text-[clamp(15px,3.7vw,18px)] font-medium leading-[1.2] tracking-normal lg:text-[17px] ${item.subtitleClassName}`}
        >
          {item.subtitle}
        </p>
      </div>
    </a>
  );
}

export default function FeatureBannerSection() {
  return (
    <section className="bg-white pb-9 pt-8">
      <Container className="lg:max-w-[1440px]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(3,416px)] lg:justify-center lg:gap-x-4 lg:gap-y-[17px]">
          {featureBanners.map((item) => (
            <FeatureBannerCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
