import { Link, useLocation } from "wouter";
import { Plane } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-primary/20 p-2 rounded-full">
              <Plane className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">Pilot<span className="text-primary">Reads</span></span>
          </a>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-muted-foreground"}`}>
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
