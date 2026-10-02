import type {
  Audience,
  FeatureBanner,
  ImportantBanner,
  InterestItem,
  NewsCategory,
  NewsItem,
  OtherService,
  ResourceListItem,
  Service,
} from "@/types/types";

export const audiences = [
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
] satisfies Audience[];

export const services = [
  {
    title: "จัดซื้อจัดจ้างภาครัฐ",
    subtitle: "Digital Pension",
    icon: "/icons/Digital-Pension-2.png",
  },
  {
    title: "ระบบจ่ายตรง\nเงินเดือน",
    subtitle: "e-Payroll",
    icon: "/icons/e-Payroll.png",
  },
  {
    title: "เงินเดือน\nบำเหน็จบำนาญ",
    subtitle: "Digital Pension",
    icon: "/icons/Digital-Pension.png",
  },
  {
    title: "รักษาพยาบาล",
    subtitle: "MBDM",
    icon: "/icons/MBDM.png",
  },
  {
    title: "การเงินการคลัง\nภาครัฐ",
    subtitle: "New GFMIS Thai",
    icon: "/icons/New-GFMIS-Thai.png",
  },
  {
    title: "ฐานข้อมูล\nสวัสดิการสังคม",
    subtitle: "e-Social Welfare",
    icon: "/icons/e-Social-Welfare.png",
  },
  {
    title: "ระบบ\nการชำระเงินกลาง",
    subtitle: "e-Payment",
    icon: "/icons/e-Payment.png",
  },
  {
    title: "ระบบบริหารเงินนอก\nงบประมาณ",
    subtitle: "NBMS",
    icon: "/icons/NBMS.png",
  },
  {
    title: "ความรับผิดทาง\nละเมิดและแพ่ง",
    subtitle: "Tcls",
    icon: "/icons/NBMS-2.png",
  },
  {
    title: "กฎหมายและระเบียบ\nการคลัง",
    subtitle: "Sarabban Law",
    icon: "/icons/Saraban-Law.png",
  },
  {
    title: "เงินทดรองราชการ",
    subtitle: "Dims",
    icon: "/icons/Dims.png",
  },
  {
    title: "มาตรฐานวิชาชีพ\nด้านการจัดซื้อจัดจ้าง",
    subtitle: "e-CPP",
    icon: "/icons/e-CPP.png",
  },
  {
    title: "เร่งรัดการเบิกจ่าย",
    subtitle: "e-BDTA",
    icon: "/icons/e-BDTA.png",
  },
] satisfies Service[];

export const otherServices = [
  {
    title: "แบบสำรวจความพึงพอใจ",
    image: "/images/survey.png",
    href: "#",
    overlayText: [
      { label: "แบบสำรวจ", className: "text-white" },
      { label: "ความพึงพอใจ", className: "text-[#ffd432] text-[25px]" },
      { label: "Satisfaction Survey", className: "text-white text-[20px]" },
    ],
  },
  {
    title: "FAQ คำถามที่พบบ่อย",
    image: "/images/faq.png",
    href: "#",
  },
  {
    title: "แบบสำรวจเรื่องร้องเรียน",
    image: "/images/suvey2.png",
    href: "#",
    overlayText: [
      { label: "แบบสำรวจ", className: "text-[#111]" },
      { label: "เรื่องร้องเรียน", className: "text-[27px] text-[#034cbd]" },
    ],
  },
  {
    title: "ธรรมาภิบาลข้อมูลภาครัฐ",
    image: "/images/data.png",
    href: "#",
    overlayText: [
      { label: "ธรรมาภิบาล", className: "text-white" },
      { label: "ข้อมูลภาครัฐ", className: "text-[25px] text-[#ffe434]" },
      { label: "Data Governance", className: "text-white text-[20px]" },
    ],
  },
  {
    title: "นโยบายเกี่ยวกับ PDPA",
    image: "/images/pdpa.png",
    href: "#",
    overlayText: [
      { label: "นโยบาย", className: "text-white" },
      { label: "เกี่ยวกับ PDPA", className: "text-[27px] text-[#034cbd]" },
    ],
  },
] satisfies OtherService[];

export const newsCategories = [
  {
    title: "ข่าวประชาสัมพันธ์",
    subtitle: "News & Update",
    icon: "documents",
    active: true,
  },
  {
    title: "ข่าวรับสมัครงาน",
    subtitle: "Recruitment News",
    icon: "recruitment",
    active: false,
  },
  {
    title: "ข่าวฝึกอบรม",
    subtitle: "Training News",
    icon: "training",
    active: false,
  },
] satisfies NewsCategory[];

export const newsItems = [
  {
    title:
      "การศึกษาดูงานต่างประเทศ โครงการฝึกอบรมหลักสูตรนักบริหารการเงินการคลังภาครัฐระดับสูง...",
    excerpt:
      "นายสมศักดิ์ ภู่สกุล ที่ปรึกษาด้านพัฒนาระบบการเงินการคลัง นำคณะผู้บริหารหลักสูตรนักบริหารการเงินการคลังภาครัฐระดับสูง ศึกษาดูงานต่างประเทศ...",
    image: "/images/news/news-1.png",
  },
  {
    title:
      "กรมบัญชีกลางร่วมแสดงความยินดี เนื่องในวันคล้ายวันสถาปนา สำนักงานสลากกินแบ่งรัฐบาล...",
    excerpt:
      "นางสาวจิภาพร ผาสุข รองอธิบดีกรมบัญชีกลาง ร่วมแสดงความยินดีเนื่องในวันคล้ายวันสถาปนาสำนักงานสลากกินแบ่งรัฐบาล...",
    image: "/images/news/news-2.png",
  },
  {
    title:
      "กรมบัญชีกลางร่วมแสดงความยินดี เนื่องในวันคล้ายวันสถาปนากรมอนามัย ครบรอบ...",
    excerpt:
      "นางสาวจิภาพร ผาสุข รองอธิบดีกรมบัญชีกลาง ร่วมแสดงความยินดีเนื่องในวันคล้ายวันสถาปนากรมอนามัย ครบรอบ 73 ปี...",
    image: "/images/news/new-3.png",
  },
] satisfies NewsItem[];

export const featureBanners = [
  {
    title: "เงินเดือน เงินบำนาญ",
    subtitle: "กรมบัญชีกลาง",
    image: "/images/feature-banners1.png",
    href: "#",
    titleClassName: "text-[var(--cgd-primary)]",
    subtitleClassName: "text-[#111111]",
  },
  {
    title: "สวัสดิการรักษาพยาบาล",
    subtitle: "กรมบัญชีกลาง",
    image: "/images/feature-banners2.png",
    href: "#",
    titleClassName: "text-[#ffd248]",
    subtitleClassName: "text-white",
  },
  {
    title: "ตรวจสอบภายใน",
    subtitle: "แบบอิเล็กทรอนิกส์",
    image: "/images/feature-banners3.png",
    href: "#",
    titleClassName: "text-[var(--cgd-primary)]",
    subtitleClassName: "text-[#111111]",
  },
  {
    title: "การบัญชีภาครัฐ",
    subtitle: "กรมบัญชีกลาง",
    image: "/images/feature-banners4.png",
    href: "#",
    titleClassName: "text-white",
    subtitleClassName: "text-white",
  },
  {
    title: "เงินนอกงบประมาณ",
    subtitle: "Non-Budgetary",
    image: "/images/feature-banners5.png",
    href: "#",
    titleClassName: "text-[#2cd9e7]",
    subtitleClassName: "text-white",
  },
  {
    title: "เงินทดรองราชการ",
    subtitle: "เพื่อช่วยเหลือผู้ประสบภัยพิบัติ\nกรณีฉุกเฉิน",
    image: "/images/feature-banners6.png",
    href: "#",
    titleClassName: "text-[#2cd9e7]",
    subtitleClassName: "text-white",
  },
] satisfies FeatureBanner[];

export const procurementItems = [
  {
    day: "12",
    month: "มี.ค. 68",
    status: "New",
    title:
      "ประกาศกรมบัญชีกลาง เรื่อง เผยแพร่แผนการจัดซื้อจัดจ้าง ประจำปีงบ...",
  },
  {
    day: "7",
    month: "มี.ค. 68",
    status: "New",
    title:
      "ประกาศกรมบัญชีกลาง เรื่อง เผยแพร่แผนการจัดซื้อจัดจ้าง ประจำปีงบ...",
  },
  {
    day: "10",
    month: "ม.ค. 68",
    status: "Update",
    title:
      "ประกาศกรมบัญชีกลาง เรื่อง เปลี่ยนแปลงแผนการจัดซื้อจัดจ้าง ประจำปี...",
  },
  {
    day: "3",
    month: "ม.ค. 68",
    status: "Cancel",
    title:
      "ประกาศกรมบัญชีกลาง เรื่อง เผยแพร่แผนการจัดซื้อจัดจ้าง ประจำปีงบ...",
  },
] satisfies ResourceListItem[];

export const formItems = [
  {
    day: "12",
    month: "มี.ค. 68",
    status: "New",
    title:
      "แบบฟอร์มการยื่นความประสงค์เปลี่ยนแปลงการจ่ายเงินเดือนเป็น 2 รอบ",
  },
  {
    day: "7",
    month: "มี.ค. 68",
    status: "New",
    title:
      "แบบฟอร์มพิจารณาปัจจัยเพื่อกำหนดอัตราเงินเดือนแรกบรรจุแบบช่วง...",
  },
  {
    day: "10",
    month: "ม.ค. 68",
    status: "Update",
    title:
      "ไขข้อสงสัย 20 คำถาม กับ กรมบัญชีกลาง เรื่อง การปรับเงื่อนไขการจ่าย...",
  },
  {
    day: "3",
    month: "ม.ค. 68",
    status: "Cancel",
    title:
      "แบบขอยกเลิกสิทธิสวัสดิการแห่งรัฐ เรื่อง เผยแพร่แผนการจัดซื้อจัดจ้าง...",
  },
] satisfies ResourceListItem[];

export const importantBanners = [
  {
    title: "ข้อมูลสำคัญ",
    subtitle: "กรมบัญชีกลาง",
    image: "/images/image-1.png",
    href: "#",
    gradient: "from-[var(--cgd-primary)] via-[var(--cgd-primary)] to-[#023F9F]",
    textClass: "text-white",
  },
  {
    title: "ผลการเบิกจ่ายเงิน\nงบประมาณ",
    subtitle: "กรมบัญชีกลาง",
    image: "/images/image-2.png",
    href: "#",
    gradient: "from-[#ffc43b] via-[#ffd557] to-[#ffe47d]",
    textClass: "text-[#052c72]",
  },
  {
    title: "รายงานการกันเงิน\nไว้เบิกเหลื่อมปี",
    subtitle: "และการขยายเวลาเบิกจ่าย",
    image: "/images/image-3.png",
    href: "#",
    gradient: "from-[#14212c] via-[#1c6171] to-[#0a7f87]",
    textClass: "text-white",
  },
] satisfies ImportantBanner[];

export const interestItems = [
  {
    title: "ข้อตกลง\nคุณธรรม",
    subtitle: "Integrity Pact",
    image: "/images/info/info-1.png",
    href: "#",
  },
  {
    title: "การให้ความช่วยเหลือ\nพลเมืองดี",
    subtitle: "",
    image: "/images/info/info-2.png",
    href: "#",
  },
  {
    title: "เรื่องที่น่าสนใจ",
    subtitle: "",
    image: "/images/info/info-3.png",
    href: "#",
  },
  {
    title: "PMQA\nกรมบัญชีกลาง",
    subtitle: "",
    image: "/images/info/info-4.png",
    href: "#",
  },
  {
    title: "NO\nGift Policy",
    subtitle: "การเสริมสร้างวัฒนธรรมองค์กร",
    image: "/images/info/info-5.png",
    href: "#",
  },
  {
    title: "ITA",
    subtitle: "",
    image: "/images/info/info-7.png",
    href: "#",
  },
  {
    title: "บริหารงานบุคลากร\nลูกจ้างส่วนราชการ",
    subtitle: "ลูกจ้างของกรมฯลูกจ้างประจำ",
    image: "/images/info/info-8.png",
    href: "#",
  },
] satisfies InterestItem[];
