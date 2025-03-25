
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
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

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const skills = [
    "JavaScript", "TypeScript", "React.js", "Next.js", 
    "Node.js", "Express", "GraphQL", "MongoDB",
    "PostgreSQL", "AWS", "Docker", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="lg:w-2/5 reveal">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-portfolio-blue opacity-70" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-portfolio-blue opacity-70" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80" 
                alt="About Me" 
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-3/5 reveal">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-portfolio-blue/10 text-portfolio-blue text-sm font-medium">
              About Me
            </div>
            
            <h2 className="section-title">
              Dedicated to crafting exceptional digital experiences
            </h2>
            
            <p className="text-lg mb-6 text-muted-foreground">
              With over 5 years of experience in web development, I specialize in creating efficient, scalable, and user-friendly applications. My approach combines technical expertise with a deep understanding of design principles.
            </p>
            
            <p className="text-lg mb-8 text-muted-foreground">
              I believe in minimalist design that focuses on user experience without unnecessary complexity. Each project I undertake reflects my commitment to clean code, performance optimization, and attention to detail.
            </p>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle size={18} className="text-portfolio-blue" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
