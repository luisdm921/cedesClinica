import Hero from "./components/hero/page";
import SlideSwitch from "./components/services/SlideSwitch";
import RelaxCedes from "./components/packages/RelaxCedes";
import BeforeAfterCarousel from "./components/beforeafter/BeforeAfterCarousel";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <SlideSwitch />
      <RelaxCedes />
      <BeforeAfterCarousel />
      <Contact />
    </main>
  );
}
