import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DSA from "./components/DSA";

export default function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      {/* <DSA /> */}
      <Contact />
    </div>
  );
}
