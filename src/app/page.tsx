import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutSection from '@/components/sections/AboutSection';
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
        <TestimonialsSection />
        <AboutSection />
        <BookingSection />
      </main>
      <FooterSection />
      <JsonLd data={homeJsonLd()} />
    </>
  );
}
