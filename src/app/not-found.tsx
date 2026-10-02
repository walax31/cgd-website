import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f9fb] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[96px] font-bold leading-none text-[var(--cgd-primary)] sm:text-[140px]">
          404
        </p>

        <h1 className="mt-4 text-2xl font-semibold text-[#2f2f2f] sm:text-3xl">
          ไม่พบหน้าที่คุณกำลังค้นหา
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#6b7280]">
          หน้าที่คุณต้องการอาจถูกย้าย ลบ หรือ URL ไม่ถูกต้อง
          กรุณาตรวจสอบอีกครั้ง หรือกลับไปยังหน้าหลัก
        </p>

        <div className="mt-8 flex justify-center text-white">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--cgd-primary)] px-8 py-3 text-base font-medium transition hover:opacity-90"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </main>
  );
}