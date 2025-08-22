import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react";

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
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>

        <Button variant="outline" className="hidden md:inline-flex">
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;
