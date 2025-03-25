
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-portfolio-blue/10 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-70" />
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`flex-1 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-portfolio-blue/10 text-portfolio-blue text-sm font-medium">
              Full Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Creating elegant <span className="text-portfolio-blue">digital</span> experiences.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A passionate web developer focused on creating intuitive, user-centered digital experiences with clean and efficient code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className={`flex-1 flex justify-center ${loaded ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-conic from-portfolio-blue/20 via-purple-500/20 to-portfolio-blue/20 blur-2xl opacity-70 rounded-full animate-float" />
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Portrait"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce-subtle text-portfolio-blue" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
