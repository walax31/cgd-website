import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AudienceSection from "@/components/home/AudienceSection";
import ServiceSection from "@/components/home/ServiceSection";
import OtherServicesSection from "@/components/home/OtherServicesSection";
import NewsSection from "@/components/home/NewsSection";
import FeatureBannerSection from "@/components/home/FeatureBannerSection";
import ProcurementFormsSection from "@/components/home/ProcurementFormsSection";
import ImportantInfoSection from "@/components/home/ImportantInfoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <ServiceSection />
        <OtherServicesSection />
        <NewsSection />
        <FeatureBannerSection />
        <ProcurementFormsSection />
        <ImportantInfoSection />
      </main>
      <Footer />
    </>
  );
}
