import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CompetencyCard } from "@/components/ui/CompetencyCard";
import { BookCard } from "@/components/ui/BookCard";
import { competencies, books } from "@/data/content";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_aviation_cockpit_view_at_night_with_bokeh_lights.png";

export default function Home() {
  const [selectedCompId, setSelectedCompId] = useState<string | null>(null);

  const filteredBooks = selectedCompId 
    ? books.filter(book => book.competencyIds.includes(selectedCompId))
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Cockpit view" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          </div>
          
          <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/20 text-xs font-mono font-bold tracking-wider mb-6">
                ICAO STANDARD
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
                Master the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Competencies</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                Curated reading list for professional pilots to enhance non-technical skills and operational excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Competency Grid */}
        <section className="container mx-auto px-4 py-12 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencies.map((comp) => (
              <CompetencyCard 
                key={comp.id}
                competency={comp}
                isSelected={selectedCompId === comp.id}
                onClick={() => setSelectedCompId(selectedCompId === comp.id ? null : comp.id)}
              />
            ))}
          </div>
        </section>

        {/* Books Section */}
        <AnimatePresence mode="wait">
          {selectedCompId && (
            <motion.section 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="container mx-auto px-4 py-12"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Recommended Reading</h2>
                  <p className="text-muted-foreground">
                    Books specifically selected for <span className="text-primary font-medium">{competencies.find(c => c.id === selectedCompId)?.title}</span>
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedCompId(null)}
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Clear Selection
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-xl">
                    <p className="text-muted-foreground">No books currently listed for this category.</p>
                  </div>
                )}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
