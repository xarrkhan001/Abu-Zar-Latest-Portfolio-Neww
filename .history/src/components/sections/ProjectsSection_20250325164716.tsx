
import { Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const ProjectsSection = () => {
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

  const projects = [
    {
      "title": "Chat Wave",
      "description": "A real-time messaging application with user authentication and seamless chat experience.",
      "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "tools": ["React"],
      "liveUrl": "https://voice-chat-chatapp.vercel.app/",
      "githubUrl": "#"
   },
   
    {
      title: "E-Commerce Platform 01",
      description: "A feature-rich online shop with modern UI/UX design principles.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["React", "Redux", "Tailwind CSS", "Node.js"],
      liveUrl: "https://eccomerce-01-abuzar.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Disney+ Clone",
      description: "A detailed recreation of the Disney+ streaming platform with similar functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["React", "Firebase", "Styled Components"],
      liveUrl: "https://disney-abuzar.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Grocery Store App",
      description: "A functional grocery delivery application with product search and ordering system.",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["React", "Context API", "Express.js", "MongoDB"],
      liveUrl: "https://grocery-store-react-one.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Personal News Website",
      description: "A news aggregation platform with categorized articles and reader-friendly layout.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
      tools: ["React", "Tailwind CSS", "News API"],
      liveUrl: "https://abuzarnew.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Heritage Walk Footwear",
      description: "An e-commerce platform for 'Heritage Walk Footwear' specializing in Peshawari and Charsadda chapals. Built with Next.js using Stripe, Firebase, and Sanity for payments, authentication, and product management.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["Next.js", "Stripe", "Firebase", "Sanity"],
      liveUrl: "https://heritage-walk-footer-nextjs-project-eccomerce.vercel.app/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#003d8f]/10 text-[#003d8f] text-sm font-medium">
            Portfolio
          </div>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            Here's a selection of my recent work, showcasing my skills in web development, 
            design, and problem-solving across different domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              
              <div className="project-overlay">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex} 
                      className="bg-white/10 px-2 py-1 rounded-full text-xs text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#003d8f] text-white p-2 rounded-full hover:bg-[#003d8f]/80 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-portfolio-black p-2 rounded-full hover:bg-white/80 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex} 
                      className="bg-[#003d8f]/10 text-[#003d8f] px-2 py-0.5 rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
