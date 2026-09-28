import Container from "@/components/ui/Container";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="text-sm text-cyan-600">
            Call Center
            <div className="font-semibold">0-2270-6400</div>
          </div>

          <div className="text-2xl font-bold text-blue-700">
            CGD
          </div>

          <div className="text-sm text-slate-600">
            เข้าสู่ระบบ | CGD Intranet | ไทย
          </div>
        </div>
      </Container>

      <Navbar />
    </header>
  );
}