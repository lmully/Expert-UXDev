import { Book } from "@/data/types";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Headphones, Quote, User } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-card border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-[224px_1fr_auto]">
        {/* Book Cover */}
        <div className="w-full md:w-56 shrink-0 relative overflow-hidden bg-black/20">
          {book.coverImage ? (
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div
              className={`w-full h-full ${book.coverColor || "bg-slate-700"} flex items-center justify-center p-8 text-center`}
            >
              <h4 className="font-display font-bold text-white/90 text-sm leading-tight">
                {book.title}
              </h4>
            </div>
          )}

          {/* Shine effect on cover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Content (centre column) */}
        <div className="p-6 md:p-8 flex flex-col min-w-0">
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-primary transition-colors leading-tight">
                  {book.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <span className="truncate">{book.author}</span>
                  {book.authorLink && (
                    <a
                      href={book.authorLink}
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-50 hover:opacity-100 transition-opacity p-1"
                      title="About the Author"
                    >
                      <User className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            {/* Summary */}
            <div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                Synopsis
              </span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {book.summary}
              </p>
            </div>

            {/* Relevance / Recommendation Reason */}
            <div className="bg-secondary/30 p-4 rounded-lg border border-white/5">
              <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2 mb-2">
                Why we recommend it
              </span>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {book.relevance}
              </p>
            </div>

            {/* Excerpt */}
            {book.excerpt && (
              <div className="relative pl-6 py-2">
                <Quote className="absolute left-0 top-0 w-4 h-4 text-white/20 fill-current" />
                <p className="text-sm italic text-muted-foreground font-serif leading-relaxed">
                  "{book.excerpt}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Index + buy links under it */}
        <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/5 flex flex-col items-end gap-4 whitespace-nowrap">
          <div className="text-right">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Index
            </div>
            <div className="text-3xl font-bold tabular-nums">
              {book.competencyIndex}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-auto w-full items-end">
            {book.links.amazon && (
              <a
                href={book.links.amazon}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-bold px-4 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors shadow-sm w-full"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Buy Book</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            )}

            {book.links.audible && (
              <a
                href={book.links.audible}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-bold px-4 py-2.5 bg-white/5 text-foreground hover:bg-white/10 rounded-md transition-colors border border-white/10 w-full"
              >
                <Headphones className="w-3.5 h-3.5" />
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