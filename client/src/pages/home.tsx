import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CompetencyCard } from "@/components/ui/CompetencyCard";
import { BookCard } from "@/components/ui/BookCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { competencies, books } from "@/data/content";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_aviation_cockpit_view_at_night_with_bokeh_lights.png";
import { Search, SortAsc } from "lucide-react";

export default function Home() {
  const [selectedCompId, setSelectedCompId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const filteredBooks = selectedCompId 
    ? books
        .filter(book => book.competencyIds.includes(selectedCompId))
        .filter(book => {
          const query = searchQuery.toLowerCase();
          return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.summary.toLowerCase().includes(query)
          );
        })
        .sort((a, b) => {
          if (sortBy === "title") return a.title.localeCompare(b.title);
          if (sortBy === "author") return a.author.localeCompare(b.author);
          return 0;
        })
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
                onClick={() => {
                  setSelectedCompId(selectedCompId === comp.id ? null : comp.id);
                  setSearchQuery(""); // Reset filters on category change
                }}
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
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Recommended Reading</h2>
                  <p className="text-muted-foreground">
                    Books specifically selected for <span className="text-primary font-medium">{competencies.find(c => c.id === selectedCompId)?.title}</span>
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search books..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 bg-card/50 border-white/10"
                    />
                  </div>
                  
                  <div className="w-full sm:w-48">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="bg-card/50 border-white/10">
                        <div className="flex items-center gap-2">
                          <SortAsc className="h-4 w-4 text-muted-foreground" />
                          <SelectValue placeholder="Sort by" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="title">Title (A-Z)</SelectItem>
                        <SelectItem value="author">Author (A-Z)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <button 
                    onClick={() => setSelectedCompId(null)}
                    className="text-sm text-muted-foreground hover:text-white transition-colors whitespace-nowrap"
                  >
                    Clear Selection
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-xl">
                    <p className="text-muted-foreground">No books match your search criteria.</p>
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
