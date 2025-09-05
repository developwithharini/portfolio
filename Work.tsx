import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="p-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-wider">Back to Home</span>
        </Link>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <h1 className="hero-title text-4xl md:text-6xl mb-8">
            PORTFOLIO
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cinematic photography and videography capturing moments from unique perspectives. 
            Every frame tells a story through dramatic lighting and compelling composition.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Grid - Placeholder for future content */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-muted to-accent rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                    <span className="text-white/60 text-sm uppercase tracking-wider">
                      Project {item}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 border border-border rounded-lg">
            <h3 className="text-xl uppercase tracking-wider mb-4">Coming Soon</h3>
            <p className="text-muted-foreground">
              Portfolio showcase is currently being curated. Check back soon for stunning visuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;