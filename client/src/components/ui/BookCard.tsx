import { Book } from "@/data/types";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Headphones } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-card border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Book Cover Placeholder */}
        <div className={`w-full md:w-48 shrink-0 ${book.coverColor || "bg-slate-700"} p-8 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          <div className="relative z-10 text-center">
            <h4 className="font-display font-bold text-white/90 text-sm mb-1 leading-tight">{book.title}</h4>
            <p className="text-white/60 text-xs font-mono">{book.author}</p>
          </div>
          {/* Spine effect */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">{book.title}</h3>
            <p className="text-primary font-mono text-sm">{book.author}</p>
          </div>

          <div className="space-y-4 mb-6 flex-grow">
            <div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Summary</span>
              <p className="text-sm text-foreground/80 leading-relaxed mt-1">{book.summary}</p>
            </div>
            
            <div className="bg-secondary/30 p-3 rounded-lg border border-white/5">
              <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                 Why it helps
              </span>
              <p className="text-sm text-foreground/90 mt-1 italic">"{book.relevance}"</p>
            </div>
          </div>

          <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
            {book.links.amazon && (
              <a href={book.links.amazon} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-medium px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <BookOpen className="w-3 h-3" />
                <span>Buy Book</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            )}
            {book.links.audible && (
              <a href={book.links.audible} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-medium px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Headphones className="w-3 h-3" />
                <span>Audiobook</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
