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
  summary: string;
  relevance: string;
  competencyIds: string[];
  links: {
    amazon?: string;
    booktopia?: string;
    audible?: string;
  };
  coverColor?: string; // Tailwind class for placeholder cover
}
