import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-200">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />

      <Container className="relative z-10">
        <div className="flex min-h-[520px] items-center">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-sm font-medium tracking-wide text-cyan-300">
              กรมบัญชีกลาง
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              บัญชีของชาติ คือ
              <span className="block text-cyan-300">
                รากฐานของศรัทธา
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 md:text-base">
              มุ่งพัฒนาระบบการบริหารการเงินการคลังภาครัฐ
              ให้มีประสิทธิภาพ โปร่งใส และตรวจสอบได้
            </p>

            <button
              type="button"
              className="mt-7 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-white hover:text-slate-900"
            >
              ดูรายละเอียด
            </button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        <button className="h-2.5 w-8 rounded-full bg-white" />
        <button className="h-2.5 w-2.5 rounded-full bg-white/50" />
        <button className="h-2.5 w-2.5 rounded-full bg-white/50" />
      </div>
    </section>
  );
}