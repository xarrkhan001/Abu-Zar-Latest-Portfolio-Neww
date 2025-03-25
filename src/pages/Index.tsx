
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ResumeSection from "../components/sections/ResumeSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  // Initialize the scroll reveal animations
  useEffect(() => {
    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    };

    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId || '');
        
        if (targetElement) {
          e.preventDefault();
          
          // Add a nice scroll animation
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Highlight the active section in the navbar
          const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
              link.classList.add('active');
            }
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Add scroll listener to highlight active section in the navbar
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
          document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call after a small delay to ensure all elements are loaded
    setTimeout(initScrollAnimations, 200);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
