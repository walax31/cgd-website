import {
  ArrowRight,
  Eye,
  FileText,
  Share2,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { formItems, procurementItems } from "@/data/data";
import type { ResourceListItem } from "@/types/types";

const statusClasses: Record<ResourceListItem["status"], string> = {
  New: "bg-[#35c5b2] text-white",
  Update: "bg-[#ffc547] text-white",
  Cancel: "bg-[#ff5d5d] text-white",
};

const rowMetaItems = [
  { id: "views", icon: Eye, label: "999k" },
  { id: "shares", icon: Share2, label: "999k" },
  { id: "files", icon: FileText, label: "3 ไฟล์" },
] satisfies {
  id: string;
  icon: LucideIcon;
  label: string;
}[];

function statusClass(status: ResourceListItem["status"]) {
  return statusClasses[status];
}

function DateBadge({ day, month }: { day: string; month: string }) {
  return (
    <div className="flex h-[84px] w-[82px] shrink-0 flex-col items-center justify-center rounded-[18px] bg-[var(--cgd-primary)] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28)_0_1px,transparent_1px_7px)] text-white shadow-[0_8px_20px_rgba(3,76,189,0.22)]">
      <span className="text-[38px] font-semibold leading-[0.92]">
        {day}
      </span>
      <span className="mt-2 text-[13px] font-semibold leading-none">
        {month}
      </span>
    </div>
  );
}

function RowMeta() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#4b5563]">
      {rowMetaItems.map(({ id, icon: Icon, label }) => (
        <span key={id} className="flex items-center gap-1 text-[#35c5b2]">
          <Icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
          <span className="text-[#4b5563]">{label}</span>
        </span>
      ))}
      <span className="text-[var(--cgd-primary)] underline underline-offset-2">
        แจ้งไฟล์เสีย
      </span>
    </div>
  );
}

function InfoRow({ item }: { item: ResourceListItem }) {
  return (
    <article className="group flex min-h-[84px] items-stretch overflow-hidden rounded-[18px] bg-[#f0f0ef] shadow-[0_5px_18px_rgba(0,0,0,0.04)]">
      <DateBadge day={item.day} month={item.month} />

      <a
        href="#"
        className="grid min-w-0 flex-1 grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-6"
      >
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <span
              className={`inline-flex h-[18px] shrink-0 items-center rounded-full px-3 text-[10px] font-medium leading-none ${statusClass(item.status)}`}
            >
              {item.status}
            </span>
            <h3 className="truncate text-[17px] font-medium leading-[1.25] text-[#111827]">
              {item.title}
            </h3>
          </div>

          <RowMeta />
        </div>

        <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[var(--cgd-primary)] text-white transition group-hover:bg-[#023F9F]">
          <ArrowRight className="h-6 w-6" strokeWidth={2.2} />
        </span>
      </a>
    </article>
  );
}

function InfoColumn({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: ResourceListItem[];
}) {
  return (
    <div>
      <SectionTitle
        title={title}
        description={subtitle}
        accentClassName="hidden"
      />

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <InfoRow
            key={`${title}-${item.day}-${item.title}`}
            item={item}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center lg:justify-end text-white">
        <a
          href="#"
          className="inline-flex h-[56px] w-[153px] items-center justify-center rounded-[10px] bg-[var(--cgd-primary)] text-[18px] font-normal text-white shadow-[0_12px_28px_rgba(3,76,189,0.18)] transition hover:bg-[#023F9F]"
        >
          ดูทั้งหมด
        </a>
      </div>
    </div>
  );
}

export default function ProcurementFormsSection() {
  return (
    <section className="bg-white pb-12 pt-4 md:pb-16 md:pt-6">
      <Container className="lg:max-w-[1440px]">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-2 lg:gap-[86px]">
          <InfoColumn
            title="จัดซื้อจัดจ้าง"
            subtitle="อัพเดทการประกาศ สรุปผล และรายงานการจัดซื้อจัดจ้าง"
            items={procurementItems}
          />
          <InfoColumn
            title="คู่มือ/แบบฟอร์ม"
            subtitle="ดาวน์โหลดคู่มือหรือแบบฟอร์มของกรมบัญชีกลาง"
            items={formItems}
          />
        </div>
      </Container>
    </section>
  );
}
