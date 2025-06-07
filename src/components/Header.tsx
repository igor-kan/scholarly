
import { Button } from "@/components/ui/button";
import { Search, FileText, Users, Upload } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">PaperlessThink</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Research</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Review</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Publish</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Archive</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Start Writing
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
