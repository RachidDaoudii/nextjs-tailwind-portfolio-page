// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Educations from "./Educations";
import Experience from "./experience";
import { Test } from "./test";


export default function Portfolio() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Educations/>
      <Experience />
      <Skills />
      <Projects />

      <Resume />
      {/* <Testimonial />
      <PopularClients /> */}
      <Test/>
      {/* <Clients /> */}
      <div className="bg-custom-gradient w-96 h-96 rounded-full flex items-center justify-center absolute buttom-[500px] left-[150px] transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-bounce animate-pulse" style={{zIndex:-2}}>
      </div>

      <ContactForm />
      <Footer />
      
      
    </div>
  );
}
