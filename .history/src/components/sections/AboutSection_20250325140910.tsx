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
    "Vue.js", "Node.js", "Express.js", "GraphQL", 
    "MongoDB", "Firebase", "Sanity", "Tailwind CSS",
    "MUI", "Redux Toolkit", "HTML/CSS", "APIs Integration", 
    "FramerMotion", "Vuetify"
  ];

  const languages = ["English", "Urdu", "Pashto"];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="lg:w-2/5 reveal">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#003d8f] opacity-70" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#003d8f] opacity-70" />
              <img 
                src="/lovable-uploads/e3360417-b511-49c9-ab2e-778f6fd7130d.png" 
                alt="About Me" 
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-3/5 reveal mt-16 lg:mt-0">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#003d8f]/10 text-[#003d8f] text-sm font-medium">
              About Me
            </div>
            
            <h2 className="section-title">
              Frontend Developer with passion for creating elegant digital experiences
            </h2>
            
            <p className="text-lg mb-8 text-muted-foreground">
              A Web Developer with two years of hands-on experience in designing, developing, and deploying web applications using various technologies and programming languages. Currently working as a Software Engineer at Tech Emulsion.
            </p>
            
            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <div 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-lg shadow-sm border border-border"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle size={18} className="text-[#003d8f]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="#contact" className="btn-primary bg-[#003d8f] hover:shadow-[0_0_0_4px_rgba(0,61,143,0.3)]">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
