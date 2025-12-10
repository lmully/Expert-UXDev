export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  authorLink?: string; // Link to author's bio or page
  summary: string;
  relevance: string; // "Why this book is a good read on the competency"
  excerpt?: string; // "An excerpt from the book that applies to the competency"
  competencyIds: string[];
  links: {
    amazon?: string;
    booktopia?: string;
    audible?: string;
  };
  coverImage?: string; // Path to cover image
  coverColor?: string; // Fallback
}
