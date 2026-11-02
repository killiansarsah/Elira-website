import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { PartnerMarquee } from './components/PartnerMarquee';
import { SmartSaaSSection } from './components/SmartSaaSSection';
import { FAQSection } from './components/FAQSection';
import { CTABanner } from './components/CTABanner';
import { FooterSection } from './components/FooterSection';

export function App() {
  return (
    <div className="min-h-screen bg-[#050211] text-[#D9D3E8] selection:bg-[#fdff50] selection:text-[#050211] overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main>
        <Hero />
        <SmartSaaSSection />
        <ProductsSection />
        <PartnerMarquee />
        <FAQSection />
        <CTABanner />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
