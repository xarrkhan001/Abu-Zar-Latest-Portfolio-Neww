import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Software Engineer", "Web Developer", "React Developer", "Vue Developer", "Next.js Developer"];

  useEffect(() => {
    setLoaded(true);
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(roleChangeInterval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-[#003d8f]/20 rounded-full filter blur-3xl opacity-70 animate-float" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#003d8f]/20 rounded-full filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`flex-1 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#003d8f]/10 text-[#003d8f] text-sm font-medium">
              Software Engineer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-[#003d8f] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#003d8f]/20 after:rounded-full">ABUZAR</span>{" "}
              <span className="relative z-10">KHAN</span>
            </h1>
            {/* Added "Hello, I'm Abuzar Khan" text */}
            <p className="text-xl text-muted-foreground mb-6">Hello, I'm Abuzar Khan</p>
            {/* Role animation */}
            <div className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              <span className="inline-block opacity-0 transition-opacity duration-1000 ease-in-out" 
                style={{
                  opacity: currentRoleIndex === 0 ? 1 : 0,
                  transitionDelay: '0.2s',
                }}
              >
                {roles[0]}
              </span>
              <span className="inline-block opacity-0 transition-opacity duration-1000 ease-in-out" 
                style={{
                  opacity: currentRoleIndex === 1 ? 1 : 0,
                  transitionDelay: '0.4s',
                }}
              >
                {roles[1]}
              </span>
              <span className="inline-block opacity-0 transition-opacity duration-1000 ease-in-out" 
                style={{
                  opacity: currentRoleIndex === 2 ? 1 : 0,
                  transitionDelay: '0.6s',
                }}
              >
                {roles[2]}
              </span>
              <span className="inline-block opacity-0 transition-opacity duration-1000 ease-in-out" 
                style={{
                  opacity: currentRoleIndex === 3 ? 1 : 0,
                  transitionDelay: '0.8s',
                }}
              >
                {roles[3]}
              </span>
              <span className="inline-block opacity-0 transition-opacity duration-1000 ease-in-out" 
                style={{
                  opacity: currentRoleIndex === 4 ? 1 : 0,
                  transitionDelay: '1s',
                }}
              >
                {roles[4]}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="btn-primary bg-[#003d8f] hover:shadow-[0_0_0_4px_rgba(0,61,143,0.3)] transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn-secondary transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className={`flex-1 flex justify-center ${loaded ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-conic from-[#003d8f]/30 via-[#003d8f]/20 to-[#003d8f]/30 blur-2xl opacity-70 rounded-full animate-float" />
              <div className="relative bg-white rounded-full overflow-hidden shadow-2xl border-4 border-[#003d8f]/20 hover:scale-105 transition-transform duration-500">
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
