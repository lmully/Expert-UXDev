export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm mb-4">
          Dedicated to the continuous improvement of professional pilots.
        </p>
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} PilotReads. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
