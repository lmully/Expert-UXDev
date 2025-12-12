export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
}
export interface CompetencyIndexItem {
  competencyId: string;
  chapterPage: string;
  oneSentence: string;
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
	// NEW: Optional competency index for chapter/page references
  competencyIndex?: CompetencyIndexItem[];
  links: {
    amazon?: string;
    booktopia?: string;
    audible?: string;
  };
  coverImage?: string; // Path to cover image
  coverColor?: string; // Fallback
}
