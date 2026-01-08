import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LinkHub } from '@/components/LinkHub';
import { Catalog } from '@/components/Catalog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <LinkHub />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
