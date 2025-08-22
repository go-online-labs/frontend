import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react";
import { Link } from "./ui/link";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <CheckSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Get Us Live</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link variant="outline" href="#services">
            Services
          </Link>
          <Link variant="outline" href="#projects">
            Projects
          </Link>
          <Link variant="outline" href="#testimonials">
            Testimonials
          </Link>
          <Link variant="outline" href="#contact">
            Contact
          </Link>
        </nav>

        <Button variant="outline" className="hidden md:inline-flex">
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;
