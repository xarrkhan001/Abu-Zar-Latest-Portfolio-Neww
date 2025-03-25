
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
          <span className="text-3xl font-bold text-red-500">!</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-2xl font-medium mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
