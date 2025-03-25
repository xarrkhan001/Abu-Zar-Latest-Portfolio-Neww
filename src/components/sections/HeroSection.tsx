
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements - updated with deeper blue gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-[#003d8f]/20 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#003d8f]/20 rounded-full filter blur-3xl opacity-70" />
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`flex-1 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#003d8f]/10 text-[#003d8f] text-sm font-medium">
              Software Engineer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#003d8f]">ABUZAR</span> <span>KHAN</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A Web Developer with two years of hands-on experience in designing, developing, and deploying web applications using various technologies and programming languages.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary bg-[#003d8f] hover:shadow-[0_0_0_4px_rgba(0,61,143,0.3)]">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className={`flex-1 flex justify-center ${loaded ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-conic from-[#003d8f]/30 via-[#003d8f]/20 to-[#003d8f]/30 blur-2xl opacity-70 rounded-full animate-float" />
              <div className="relative bg-white rounded-full overflow-hidden shadow-2xl border-4 border-[#003d8f]/20">
                <img
                  src="/lovable-uploads/e3360417-b511-49c9-ab2e-778f6fd7130d.png"
                  alt="Abuzar Khan"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce-subtle text-[#003d8f]" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
