import content from "../data/content.json";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImageUrl?: string;
  affiliateUrl?: string;
}

export interface Recommendation {
  bookId: string;
  chapter: string;
  chapterRef?: string;
  whyItHelps: string;
  keyTakeaway?: string;
  timeToReadMins?: number;
  difficulty?: "Easy" | "Medium" | "Hard";
  tags?: string[];
  book?: Book; // Resolved book data
}

export interface Problem {
  id: string;
  title: string;
  symptom: string;
  outcome: string;
  recommendations: Recommendation[];
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
  problems: Problem[];
}

export function getCompetencies(): Competency[] {
  return content.competencies as Competency[];
}

export function getCompetencyById(id: string): Competency | undefined {
  return getCompetencies().find((c) => c.id === id);
}

export function getProblemById(problemId: string): { problem: Problem; competency: Competency } | undefined {
  for (const competency of getCompetencies()) {
    const problem = competency.problems.find((p) => p.id === problemId);
    if (problem) {
      return { problem, competency };
    }
  }
  return undefined;
}

export function getBookById(bookId: string): Book | undefined {
  return content.books.find((b) => b.id === bookId);
}

export function resolveRecommendations(problem: Problem): Problem {
  const seenBooks = new Set<string>();
  const resolvedRecommendations: Recommendation[] = [];

  for (const rec of problem.recommendations) {
    if (seenBooks.has(rec.bookId)) {
      console.warn(`Duplicate book recommendation found for bookId: ${rec.bookId} in problem: ${problem.id}. Skipping.`);
      continue;
    }

    const book = getBookById(rec.bookId);
    if (book) {
      resolvedRecommendations.push({ ...rec, book });
      seenBooks.add(rec.bookId);
    } else {
      console.warn(`Book not found for bookId: ${rec.bookId} in problem: ${problem.id}`);
    }
  }

  return { ...problem, recommendations: resolvedRecommendations };
}
