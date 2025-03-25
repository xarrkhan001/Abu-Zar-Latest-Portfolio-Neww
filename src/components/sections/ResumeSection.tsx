
import { FileText, BookOpen, Award, Calendar, Download } from "lucide-react";
import { useEffect } from "react";

const ResumeSection = () => {
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

  const handleDownloadCV = () => {
    // In a real implementation, you'd have an actual PDF file to download
    alert("CV download would start here - replace with actual file download");
  };

  const workExperience = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc",
      period: "2021 - Present",
      description: "Led the development of responsive web applications using React and Next.js. Implemented state management with Redux and designed UI components with Tailwind CSS."
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Agency",
      period: "2018 - 2021",
      description: "Developed and maintained web applications using MERN stack. Integrated third-party APIs and implemented payment gateways. Optimized application performance and database queries."
    },
    {
      position: "Junior Web Developer",
      company: "Creative Web Studio",
      period: "2016 - 2018",
      description: "Created responsive websites using HTML, CSS, and JavaScript. Collaborated with designers to implement UI/UX designs. Maintained and updated existing client websites."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and Software Engineering. Completed thesis on 'Optimizing React Applications for Performance'."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Relevant coursework included database management, algorithms, and web development fundamentals."
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      title: "Professional Web Developer Certification",
      issuer: "Meta",
      date: "2021"
    },
    {
      title: "Google Cloud Certified Professional",
      issuer: "Google",
      date: "2020"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-portfolio-blue/10 text-portfolio-blue text-sm font-medium">
            Resume
          </div>
          <h2 className="section-title">Professional Background</h2>
          <p className="section-subtitle mx-auto">
            My professional journey, education, and certifications that have shaped my skills and expertise in web development.
          </p>
          <button 
            onClick={handleDownloadCV}
            className="btn-primary flex items-center gap-2 mx-auto mt-8"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center text-portfolio-blue">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="border-l-2 border-portfolio-blue/30 pl-8 space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 top-0 w-6 h-6 bg-portfolio-blue rounded-full border-4 border-white" />
                  
                  <div className="flex flex-col">
                    <span className="flex items-center gap-2 text-sm text-portfolio-blue mb-1">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <h4 className="text-xl font-semibold">{job.position}</h4>
                    <p className="text-portfolio-gray mb-3">{job.company}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div>
            {/* Education */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center text-portfolio-blue">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="border-l-2 border-portfolio-blue/30 pl-8 space-y-12 mb-16">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 top-0 w-6 h-6 bg-portfolio-blue rounded-full border-4 border-white" />
                    
                    <div className="flex flex-col">
                      <span className="flex items-center gap-2 text-sm text-portfolio-blue mb-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-portfolio-gray mb-3">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-portfolio-blue/10 rounded-full flex items-center justify-center text-portfolio-blue">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-semibold mb-2 line-clamp-2">{cert.title}</h4>
                    <p className="text-sm text-portfolio-gray mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
