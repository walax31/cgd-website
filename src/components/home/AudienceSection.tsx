import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

const audiences = [
  {
    title: "สำหรับประชาชน",
    description: "บริการและข้อมูลสำหรับประชาชนทั่วไป",
    className: "bg-cyan-500",
  },
  {
    title: "สำหรับเจ้าหน้าที่ภาครัฐ",
    description: "บริการและระบบงานสำหรับหน่วยงานภาครัฐ",
    className: "bg-blue-700",
  },
];

export default function AudienceSection() {
  return (
    <section className="py-8 md:py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((item) => (
            <a
              key={item.title}
              href="#"
              className={`${item.className} group rounded-2xl p-6 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h2 className="text-[33px] text-white">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/80">
                    {item.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
