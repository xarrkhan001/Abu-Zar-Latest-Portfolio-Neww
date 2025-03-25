
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Portfolio<span className="text-portfolio-blue">.</span>
            </a>
            <p className="mt-2 text-muted-foreground">
              Designed & Built with precision.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:example@email.com" icon={<Mail size={20} />} label="Email" />
            <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-portfolio-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-portfolio-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-portfolio-gray hover:text-portfolio-blue hover:shadow-md transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;
