import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Book } from "@/data/types";
import { Copy, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { competencies } from "@/data/content";

export default function Admin() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState<Partial<Book>>({
    id: "",
    title: "",
    author: "",
    authorLink: "",
    summary: "",
    relevance: "",
    excerpt: "",
    competencyIds: [],
    links: { amazon: "", audible: "" },
    coverImage: "",
    coverColor: "bg-slate-700"
  });

  const generateJson = () => {
    const json = JSON.stringify(formData, null, 2);
    return json;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateJson());
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Paste this into client/src/data/content.ts",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // We can't actually upload, but we can help them with the path
      const safeName = formData.title 
        ? formData.title.toLowerCase().replace(/[^a-z0-9]/g, "-") + ".jpg"
        : file.name;
        
      setFormData({ ...formData, coverImage: `/books/${safeName}` });
      
      toast({
        title: "File selected",
        description: `Please save this file as '${safeName}' in the 'client/public/books' folder.`,
        duration: 5000,
      });
    }
  };

  const toggleCompetency = (id: string) => {
    const current = formData.competencyIds || [];
    const updated = current.includes(id)
      ? current.filter(c => c !== id)
      : [...current, id];
    setFormData({ ...formData, competencyIds: updated });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Book Entry Generator</h1>
          <p className="text-muted-foreground">
            Use this tool to generate the JSON code for a new book. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-white/10 pb-2">Book Details</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-muted-foreground">ID (Unique)</label>
                  <Input 
                    placeholder="e.g. stick-and-rudder" 
                    value={formData.id}
                    onChange={e => setFormData({...formData, id: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-muted-foreground">Title</label>
                  <Input 
                    placeholder="Book Title" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-muted-foreground">Author</label>
                  <Input 
                    placeholder="Author Name" 
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase text-muted-foreground">Author Link</label>
                  <Input 
                    placeholder="https://..." 
                    value={formData.authorLink}
                    onChange={e => setFormData({...formData, authorLink: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase text-muted-foreground">Summary</label>
                <textarea 
                  className="w-full bg-transparent border border-input rounded-md p-3 text-sm min-h-[100px]"
                  placeholder="Short summary of the book..."
                  value={formData.summary}
                  onChange={e => setFormData({...formData, summary: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-white/10 pb-2">Context</h3>
              
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase text-muted-foreground">Relevance (Why we recommend it)</label>
                <textarea 
                  className="w-full bg-transparent border border-input rounded-md p-3 text-sm min-h-[80px]"
                  placeholder="Explain why this helps the competency..."
                  value={formData.relevance}
                  onChange={e => setFormData({...formData, relevance: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase text-muted-foreground">Excerpt (Optional)</label>
                <textarea 
                  className="w-full bg-transparent border border-input rounded-md p-3 text-sm min-h-[60px]"
                  placeholder="A short quote..."
                  value={formData.excerpt}
                  onChange={e => setFormData({...formData, excerpt: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase text-muted-foreground">Competencies</label>
                <div className="grid grid-cols-2 gap-2">
                  {competencies.map(comp => (
                    <button
                      key={comp.id}
                      onClick={() => toggleCompetency(comp.id)}
                      className={`text-left text-xs p-2 rounded border transition-colors ${
                        formData.competencyIds?.includes(comp.id)
                          ? "bg-primary/20 border-primary text-primary"
                          : "border-white/10 hover:bg-white/5"
                      }`}
                    >
                      {comp.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-white/10 pb-2">Cover Image</h3>
              
              <div className="p-4 border border-dashed border-white/20 rounded-lg bg-white/5">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground block mb-2">Option 1: Image URL (e.g. from OpenLibrary)</label>
                    <Input 
                      placeholder="https://covers.openlibrary.org/..." 
                      value={formData.coverImage}
                      onChange={e => setFormData({...formData, coverImage: e.target.value})}
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase text-muted-foreground block mb-2">Option 2: Upload File</label>
                    <Input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    <p className="text-[10px] text-muted-foreground mt-2 flex items-start gap-2">
                      <Info className="w-3 h-3 mt-0.5" />
                      Since this is a static site, you must manually move the image file to the 
                      <code className="mx-1 bg-white/10 px-1 rounded">client/public/books</code> folder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Generated JSON</h3>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-white/10 overflow-x-auto relative group">
                <pre className="text-xs font-mono text-blue-300 whitespace-pre-wrap">
                  {generateJson()},
                </pre>
              </div>

              <div className="mt-8 bg-secondary/20 p-6 rounded-xl border border-white/5">
                <h4 className="font-bold text-sm mb-2 text-white">Instructions</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                  <li>Fill out the form on the left.</li>
                  <li>If using a custom image, save it to <code className="text-xs bg-white/10 px-1 py-0.5 rounded">client/public/books/</code></li>
                  <li>Click <strong>Copy Code</strong> above.</li>
                  <li>Open <code className="text-xs bg-white/10 px-1 py-0.5 rounded">client/src/data/content.ts</code></li>
                  <li>Paste the code into the <code className="text-xs bg-white/10 px-1 py-0.5 rounded">books</code> array.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
