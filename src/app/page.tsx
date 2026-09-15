import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TarifsSection from '@/components/sections/TarifsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutSection from '@/components/sections/AboutSection';
import CabinetSection from '@/components/sections/CabinetSection';
import FaqSection from '@/components/sections/FaqSection';
import BookingSection from '@/components/sections/BookingSection';
import FooterSection from '@/components/sections/FooterSection';
import JsonLd from '@/components/seo/JsonLd';
import { homeJsonLd } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <TarifsSection />
        <TestimonialsSection />
        <AboutSection />
        <CabinetSection />
        <FaqSection />
        <BookingSection />
      </main>
      <FooterSection />
      <JsonLd data={homeJsonLd()} />
    </>
  );
}
