
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-theme-blue mb-4">404</h1>
        <p className="text-2xl text-slate-800 mb-6">Oops! Page not found</p>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-theme-blue hover:bg-theme-dark-blue">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
