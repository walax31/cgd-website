import Container from "@/components/ui/Container";

const menuItems = [
  "หน้าหลัก",
  "บริการหลัก",
  "ข้อมูลองค์กร",
  "ข่าวประชาสัมพันธ์",
  "กฎหมาย/ระเบียบ",
  "ติดต่อเรา",
];

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white">
      <Container className="flex items-center">
        <div className="flex flex-1">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`px-5 py-4 text-sm transition hover:bg-blue-600 ${
                index === 0 ? "bg-teal-500" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="px-4 py-4 hover:bg-blue-600">
          🔍
        </button>

        <button className="bg-amber-400 px-4 py-4 text-white">
          ♿
        </button>
      </Container>
    </nav>
  );
}