import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { otherServices } from "@/data/data";
import type { OtherService } from "@/types/types";

function OtherServiceCard({ item }: { item: OtherService }) {
  return (
    <a
      href={item.href}
      className="group overflow-hidden rounded-[18px]"
    >
      <div className="relative aspect-square overflow-hidden rounded-[18px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {item.overlayText ? (
          <div className="absolute left-[10%] top-[10%] z-10 flex max-w-[82%] flex-col text-[18px] font-medium leading-[1.08] tracking-normal">
            {item.overlayText.map((line) => (
              <span key={line.label} className={line.className}>
                {line.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}

export default function OtherServicesSection() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          title="บริการอื่นๆของกรมบัญชีกลาง"
          description="ศูนย์รวมข้อมูลเพื่อติดต่อราชการ มิติใหม่ขององค์ความรู้ ทุกเรื่องราวการบริการของเราที่รู้ใจประชาชน"
        />

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {otherServices.map((item) => (
            <OtherServiceCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
