import { Accessibility, Search } from "lucide-react";

import Container from "@/components/ui/Container";

const menuItems = [
  { label: "หน้าหลัก", widthClass: "lg:w-[115px]" },
  { label: "บริการหลัก", widthClass: "lg:w-[163px]" },
  { label: "ข้อมูลองค์กร", widthClass: "lg:w-[165px]" },
  { label: "ข่าวประชาสัมพันธ์", widthClass: "lg:w-[190px]" },
  { label: "กฎหมาย/ระเบียบ", widthClass: "lg:w-[190px]" },
  { label: "ติดต่อเรา", widthClass: "lg:flex-1 lg:min-w-[170px]" },
];

export default function Navbar() {
  return (
    <nav className="relative bg-transparent text-white">
      <Container className="lg:max-w-[1596px] lg:px-0">
        <div className="flex min-h-[60px] overflow-x-auto overflow-y-hidden rounded-[5px] bg-[var(--cgd-primary)] shadow-[0_5px_16px_rgba(3,76,189,0.24)]">
          <div className="hidden shrink-0 lg:block lg:w-[365px]" />

          <div className="flex flex-1">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href="#"
                className={`flex min-w-[130px] items-center justify-center px-5 text-center text-[16px] font-normal leading-none tracking-normal transition hover:bg-[#023F9F] ${item.widthClass} ${
                  index === 0 ? "bg-[#35c5b2]" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex w-[60px] shrink-0 items-center justify-center bg-[#35c5b2] transition hover:bg-[#27b5a2]"
            aria-label="ค้นหา"
          >
            <Search className="h-8 w-8" strokeWidth={2.2} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="flex w-[60px] shrink-0 items-center justify-center bg-[#ffc22f] text-white transition hover:bg-[#f4b51d]"
            aria-label="เครื่องมือช่วยการเข้าถึง"
          >
            <Accessibility
              className="h-8 w-8"
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </button>
        </div>
      </Container>
    </nav>
  );
}
