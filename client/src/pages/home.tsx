import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getCompetencies } from "@/lib/content";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Home() {
  const competencies = getCompetencies();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar moved to layout if possible, but keeping here for now as per constraints */}
      <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-primary/20 p-2 rounded-full">
                <Icons.Plane className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">Pilot<span className="text-primary">Reads</span></span>
            </a>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="text-sm font-medium transition-colors hover:text-primary text-primary">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">About</a>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
         {/* Hero Section */}
         <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/90 to-background">
          <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/20 text-xs font-mono font-bold tracking-wider mb-6">
                ICAO STANDARD
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                Master the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Competencies</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencies.map((comp) => {
              // @ts-ignore
              const Icon = Icons[comp.icon] || Icons.Activity;
              return (
                <Link key={comp.id} href={`/competency/${comp.id}`}>
                  <a className="block group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="h-full relative w-full text-left p-6 rounded-xl border border-white/5 hover:border-white/20 hover:bg-card/80 bg-card transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg w-fit mb-4 transition-colors bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2 leading-tight text-foreground group-hover:text-primary">
                        {comp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {comp.description}
                      </p>
                    </motion.div>
                  </a>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-card py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Dedicated to the continuous improvement of professional pilots.
          </p>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} PilotReads. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
