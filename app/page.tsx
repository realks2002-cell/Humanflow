import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import ProblemSection from "@/components/ProblemSection";
import RecruitSection from "@/components/RecruitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <main className="fullpage-container">
      <Header />
      <HeroSlider />
      <AboutSection />
      <BusinessSection />
      <ProblemSection />
      <RecruitSection />
      <ContactSection />
      <Footer />
      <FloatingButton />
      <SideNav />
    </main>
  );
}
