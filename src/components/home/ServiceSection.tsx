import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/data";
import type { Service } from "@/types/types";

const desktopRows = [services.slice(0, 7), services.slice(7)];

const sectionDescription =
  "อำนวยความสะดวกให้ประชาชนสามารถรับทราบข้อมูลการให้บริการขององค์กรที่ถูกต้อง ครบถ้วน ชัดเจน";

function ServiceItem({ service }: { service: Service }) {
  return (
    <a
      href="#"
      className={`
        group flex min-h-[150px] flex-col items-center justify-center
        rounded-[16px] px-3 py-4 text-center
        bg-transparent transition duration-200 hover:bg-[#eaf2ff]
        lg:h-[150px] lg:w-[150px] lg:min-h-0
      `}
    >
      <div className="mb-2 flex h-[54px] w-[54px] shrink-0 items-center justify-center">
        <Image
          src={service.icon}
          alt=""
          width={52}
          height={52}
          className="h-[52px] w-[52px] object-contain"
        />
      </div>

      <h3
        className={`
          whitespace-pre-line
          text-center
          text-[15px]
          font-semibold
          leading-[1.45]
          lg:flex lg:h-[42px] lg:w-full lg:items-center
          lg:justify-center lg:leading-[1.2]
          text-[#171717] transition-colors group-hover:text-[var(--cgd-primary)]
        `}
      >
        {service.title}
      </h3>

      <p
        className={`
          mt-1.5 text-center text-[14px]
          lg:mt-0 lg:flex lg:h-6 lg:w-full
          lg:items-start lg:justify-center lg:leading-6
          text-[#333] transition-colors group-hover:text-[var(--cgd-primary)]
        `}
      >
        {service.subtitle}
      </p>
    </a>
  );
}

export default function ServiceSection() {
  return (
    <section className="pb-16 pt-12">
      <Container className="lg:max-w-[1220px]">
        <SectionTitle
          title="ระบบงานกรมบัญชีกลาง"
          description={sectionDescription}
          accentClassName="bg-[#44C3E6]"
        />

        {desktopRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={
              rowIndex === 0
                ? "mt-5 hidden justify-center gap-x-5 lg:grid lg:grid-cols-[repeat(7,150px)] lg:justify-items-center"
                : "mx-auto mt-6 hidden justify-center gap-x-8 lg:grid lg:grid-cols-[repeat(6,150px)] lg:justify-items-center"
            }
          >
            {row.map((service) => (
              <ServiceItem key={service.title} service={service} />
            ))}
          </div>
        ))}

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:hidden">
          {services.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
