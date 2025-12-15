import { Link, useRoute } from "wouter";
import { getProblemById, resolveRecommendations } from "@/lib/content";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import NotFound from "./not-found";

export default function ProblemPage() {
  const [, params] = useRoute("/problem/:id");
  const problemId = params?.id;
  const data = problemId ? getProblemById(problemId) : undefined;

  if (!data) {
    return <NotFound />;
  }

  const { problem, competency } = data;
  const resolvedProblem = resolveRecommendations(problem);

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
            <Link href={`/competency/${competency.id}`}>
              <a className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1">
                <Icons.ArrowLeft className="w-4 h-4" />
                Back to {competency.title}
              </a>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/20">
            Problem
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">{resolvedProblem.title}</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/20 border border-white/5 p-6 rounded-xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
                <Icons.Frown className="w-4 h-4" /> It feels like...
              </div>
              <p className="text-lg text-foreground/90">{resolvedProblem.symptom}</p>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl">
              <div className="flex items-center gap-2 text-primary mb-2 text-sm font-bold uppercase tracking-wider">
                <Icons.Smile className="w-4 h-4" /> Improves...
              </div>
              <p className="text-lg text-foreground/90">{resolvedProblem.outcome}</p>
            </div>
          </div>
        </motion.div>

        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Icons.BookOpen className="w-6 h-6 text-primary" />
            Recommended Reading
          </h2>

          <div className="space-y-8">
            {resolvedProblem.recommendations.map((rec, index) => (
              <div key={index} className="bg-card border border-white/10 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                {/* Book Cover */}
                <div className="w-full md:w-48 bg-black/20 shrink-0 relative flex items-center justify-center p-6 md:p-0">
                  {rec.book?.coverImageUrl ? (
                    <img 
                      src={rec.book.coverImageUrl} 
                      alt={rec.book.title} 
                      className="w-32 md:w-full h-auto object-cover shadow-xl"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[200px] bg-slate-800 flex items-center justify-center p-4 text-center">
                      <span className="text-sm font-bold">{rec.book?.title || "Book Cover"}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{rec.book?.title}</h3>
                      <p className="text-muted-foreground font-mono text-sm">{rec.book?.author}</p>
                    </div>
                    {rec.book?.affiliateUrl && (
                      <a 
                        href={rec.book.affiliateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                      >
                        Buy Book <Icons.ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded text-xs font-bold mb-2">
                        Start Here
                      </div>
                      <h4 className="text-lg font-medium">{rec.chapter}</h4>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase text-muted-foreground mb-1">Why it helps</h5>
                      <p className="text-foreground/90 leading-relaxed">
                        {rec.whyItHelps}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {rec.timeToReadMins && (
                        <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground flex items-center gap-1">
                          <Icons.Clock className="w-3 h-3" /> {rec.timeToReadMins} min read
                        </span>
                      )}
                      {rec.difficulty && (
                        <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground flex items-center gap-1">
                          <Icons.BarChart className="w-3 h-3" /> {rec.difficulty}
                        </span>
                      )}
                      {rec.tags?.map(tag => (
                        <span key={tag} className="text-xs border border-white/10 px-2 py-1 rounded text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
