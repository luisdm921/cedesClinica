import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import SlideSwitch from "./components/services/SlideSwitch";
import RelaxCedes from "./components/packages/RelaxCedes";
import BeforeAfterCarousel from "./components/beforeafter/BeforeAfterCarousel";
import VideoCarousel from "./components/videos/VideoCarousel";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { publishedTreatments } from "@/content/treatments/catalog";

export default function Home() {
  const publishedTreatmentSlugs = publishedTreatments.map(
    ({ slug }) => slug,
  );

  return (
    <main>
      <Hero />
      <About />
      <SlideSwitch publishedTreatmentSlugs={publishedTreatmentSlugs} />
      <RelaxCedes />
      <BeforeAfterCarousel />
      <VideoCarousel />
      <Testimonials />
      <Contact />
    </main>
  );
}
