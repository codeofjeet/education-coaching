import About from "@/components/About";
import Courses from "@/components/Courses";
import Faculty from "@/components/Faculty";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Subjects from "@/components/Subjects";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Subjects />
      <WhyChooseUs />
      <Faculty />
      <Results />
      <Gallery />
    </main>
  );
}