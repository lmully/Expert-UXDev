import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">About PilotReads</h1>
        
        <div className="prose prose-invert prose-lg">
          <p>
            PilotReads was created to bridge the gap between regulatory competency frameworks and practical self-improvement for professional pilots.
          </p>
          
          <h3>The Philosophy</h3>
          <p>
            While technical knowledge is foundational, the ICAO Core Competencies highlight that a significant portion of flight safety relies on non-technical skills: leadership, decision making, and communication.
          </p>
          <p>
            This platform curates high-quality literature that directly strengthens these specific skills, providing pilots with actionable insights from both within and outside the aviation industry.
          </p>

          <h3>How it Works</h3>
          <p>
            Select a competency you wish to improve, and we will present a list of books that have been identified by senior captains and human factors experts as being particularly relevant to that skill.
          </p>
          
          <div className="bg-card p-6 rounded-xl border border-white/10 mt-8 not-prose">
            <h4 className="font-bold text-lg mb-2 text-primary">Contribute</h4>
            <p className="text-sm text-muted-foreground">
              This is an open list. If you have read a book that significantly improved your flying or command capability, please suggest it for inclusion.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
