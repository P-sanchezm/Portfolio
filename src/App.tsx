import { Background } from "./components/ui/Background";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Timeline } from "./components/sections/Timeline";
import { Projects } from "./components/sections/Projects";
import { Interests } from "./components/sections/Interests";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
