import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutOne from "./components/sections/about/AboutOne";
import Categories from "./components/sections/categories/Categories";
import News from "./components/sections/news/News"
import CompaniesSection from "./components/sections/companies/CompaniesSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/layout/footer/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease",
      once: true,    
      offset: 80,     
    });
  }, []);

  return (
    <main className="bg-white font-iransans overflow-y-hidden">
      <Navbar />
      <Hero />
      <AboutOne />
      <Categories />
      <News />
      <CompaniesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
