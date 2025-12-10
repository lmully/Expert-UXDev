import { Competency } from "@/data/types";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface CompetencyCardProps {
  competency: Competency;
  isSelected: boolean;
  onClick: () => void;
}

export function CompetencyCard({ competency, isSelected, onClick }: CompetencyCardProps) {
  // Dynamically get icon
  // @ts-ignore
  const Icon = Icons[competency.icon] || Icons.Activity;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative w-full text-left p-6 rounded-xl border transition-all duration-300
        ${isSelected 
          ? "bg-primary/10 border-primary shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]" 
          : "bg-card border-white/5 hover:border-white/20 hover:bg-card/80"
        }
      `}
    >
      <div className={`
        p-3 rounded-lg w-fit mb-4 transition-colors
        ${isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}
      `}>
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className={`font-display font-bold text-lg mb-2 leading-tight ${isSelected ? "text-primary" : "text-foreground"}`}>
        {competency.title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {competency.description}
      </p>
    </motion.button>
  );
}
