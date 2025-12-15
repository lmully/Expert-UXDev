import { Link, useRoute } from "wouter";
import { getCompetencyById } from "@/lib/content";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import NotFound from "./not-found";

export default function CompetencyPage() {
  const [, params] = useRoute("/competency/:id");
  const competencyId = params?.id;
  const competency = competencyId ? getCompetencyById(competencyId) : undefined;

  if (!competency) {
    return <NotFound />;
  }

  // @ts-ignore
  const Icon = Icons[competency.icon] || Icons.Activity;

  return (
    <div className="min-h-screen flex flex-col">
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
              <a className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">Home</a>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{competency.title}</h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {competency.description}
          </p>
        </motion.div>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icons.AlertCircle className="w-6 h-6 text-accent" />
            Common Problems
          </h2>
          
          <div className="grid gap-4">
            {competency.problems && competency.problems.length > 0 ? (
              competency.problems.map((problem) => (
                <Link key={problem.id} href={`/problem/${problem.id}`}>
                  <a className="block group">
                    <div className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {problem.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {problem.symptom}
                        </p>
                      </div>
                      <Icons.ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                </Link>
              ))
            ) : (
              <div className="p-8 border border-dashed border-white/10 rounded-xl text-center text-muted-foreground">
                No specific problems listed for this competency yet.
              </div>
            )}
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
