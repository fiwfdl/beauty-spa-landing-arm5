import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Visit } from '@/components/visit';
import { Booking } from '@/components/booking';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top-anchor">
        <Hero />
        <Services />
        <About />
        <Visit />
        <Booking />
      </main>
      <SiteFooter />
    </>
  );
}
