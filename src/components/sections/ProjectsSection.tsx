
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
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality, notification system, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A data visualization platform with real-time analytics, custom reports, and machine learning insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["React", "D3.js", "Python", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "A community-focused social network with real-time messaging, content creation, and analytics.",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["React Native", "Firebase", "Express", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
      tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Application",
      description: "A weather forecast application with location detection, radar maps, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tools: ["JavaScript", "OpenWeather API", "Leaflet.js", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-portfolio-blue/10 text-portfolio-blue text-sm font-medium">
            Portfolio
          </div>
          <h2 className="section-title">Recent Projects</h2>
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
                    className="bg-portfolio-blue text-white p-2 rounded-full hover:bg-portfolio-blue/80 transition-colors"
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
                      className="bg-secondary px-2 py-0.5 rounded-full text-xs"
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
