
import { FileText, BookOpen, Award, Calendar, Download, Briefcase } from "lucide-react";
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
    // In a real implementation, download the CV PDF file
    const link = document.createElement('a');
    link.href = '/Ab.pdf';
    link.download = 'Abuzar_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const workExperience = [
    {
      position: "FRONTEND DEVELOPER",
      company: "TECH PIONEER",
      period: "2023 - 2024",
      description: "8 months work experience at Tech Pioneer as Front-End Developer, where I collaborated on several projects, contributing to their design, development, and implementation."
    },
    {
      position: "SOFTWARE ENGINEER (Frontend Developer)",
      company: "TECH EMULSION",
      period: "2021 - 2023",
      description: "Currently doing onsite job as a Software Engineer at Tech Emulsion, working on frontend development for various web applications and e-commerce platforms."
    }
  ];

  const education = [
    {
      degree: "BS-SOFTWARE ENGINEERING",
      institution: "Islamia College University, Peshawar",
      period: "01/07/2020 - 25/05/2024",
      description: "Completing Bachelor's degree in Software Engineering with focus on web technologies and software development."
    },
    {
      degree: "FSC",
      institution: "City College Peshawar",
      period: "17/01/2020",
      description: "Completed pre-engineering studies with good academic standing."
    }
  ];

  const certifications = [
    {
      title: "BASICS AND ADVANCED REACT",
      issuer: "Meta",
      date: "2024"
    },
    {
      title: "PROGRAMMING WITH JAVASCRIPT",
      issuer: "Meta",
      date: "2023"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#003d8f]/10 text-[#003d8f] text-sm font-medium">
            Resume
          </div>
          <h2 className="section-title">Professional Background</h2>
          <p className="section-subtitle mx-auto">
            My professional journey, education, and certifications that have shaped my skills and expertise in web development.
          </p>
          <button 
            onClick={handleDownloadCV}
            className="btn-primary bg-[#003d8f] flex items-center gap-2 mx-auto mt-8 hover:shadow-[0_0_0_4px_rgba(0,61,143,0.3)]"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#003d8f]/10 rounded-full flex items-center justify-center text-[#003d8f]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="border-l-2 border-[#003d8f]/30 pl-8 space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 top-0 w-6 h-6 bg-[#003d8f] rounded-full border-4 border-white" />
                  
                  <div className="flex flex-col">
                    <span className="flex items-center gap-2 text-sm text-[#003d8f] mb-1">
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
            
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#003d8f]/10 rounded-full flex items-center justify-center text-[#003d8f]">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold">Projects</h3>
              </div>
              
              <div className="border-l-2 border-[#003d8f]/30 pl-8 space-y-8">
  <div className="relative">
    <div className="absolute -left-10 top-0 w-6 h-6 bg-[#003d8f] rounded-full border-4 border-white" />
    
    <div className="flex flex-col">
      <h4 className="text-xl font-semibold">
        <a href="https://podbcn.techemulsion.com/" target="_blank" rel="noopener noreferrer">
          https://podbcn.techemulsion.com/
        </a>
      </h4>
      <p className="text-muted-foreground mt-2">
        In this project, I worked as a Frontend Developer, building a component where users can create an account and add all their social media links in one place, making it easy to share multiple profiles at once.
      </p>
    </div>
  </div>
  
  <div className="relative">
    <div className="absolute -left-10 top-0 w-6 h-6 bg-[#003d8f] rounded-full border-4 border-white" />
    
    <div className="flex flex-col">
      <h4 className="text-xl font-semibold">
        <a href="https://www.rains.com/" target="_blank" rel="noopener noreferrer">
          https://www.rains.com/
        </a>
      </h4>
      <p className="text-muted-foreground mt-2">
        This is an e-commerce platform selling products like jackets, purses, and other items designed specifically for rainy weather. In this project, I worked extensively on the frontend to enhance the user experience.
      </p>
    </div>
  </div>
  
  <div className="relative">
    <div className="absolute -left-10 top-0 w-6 h-6 bg-[#003d8f] rounded-full border-4 border-white" />
    
    <div className="flex flex-col">
      <h4 className="text-xl font-semibold">
        <a href="https://mrbook.peshawar.com/" target="_blank" rel="noopener noreferrer">
          https://mrbook.peshawar.com/
        </a>
      </h4>
      <p className="text-muted-foreground mt-2">
        This is an e-commerce platform for ordering a variety of books. Designed to provide a seamless shopping experience, I worked on the frontend to enhance the navigation and ensure a smooth user interface.
      </p>
    </div>
  </div>
</div>

            </div>
          </div>
          
          {/* Education & Certifications */}
          <div>
            {/* Education */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#003d8f]/10 rounded-full flex items-center justify-center text-[#003d8f]">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="border-l-2 border-[#003d8f]/30 pl-8 space-y-12 mb-16">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 top-0 w-6 h-6 bg-[#003d8f] rounded-full border-4 border-white" />
                    
                    <div className="flex flex-col">
                      <span className="flex items-center gap-2 text-sm text-[#003d8f] mb-1">
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
                <div className="w-12 h-12 bg-[#003d8f]/10 rounded-full flex items-center justify-center text-[#003d8f]">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            
            <div className="mt-16 reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#003d8f]/10 rounded-full flex items-center justify-center text-[#003d8f]">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold">Reference</h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-border">
                <p className="text-lg">Available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
