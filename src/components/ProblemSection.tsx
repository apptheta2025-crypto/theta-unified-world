import { Puzzle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-create rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Puzzle className="w-10 h-10 text-primary-foreground animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity -z-10 animate-pulse-slow" />
              
              {/* Orbiting Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-create rounded-full animate-float"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-glow rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Tired of the <span className="text-gradient-primary text-glow">Clutter</span>?
              </h2>
              
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-pulse-slow"></div>
            </div>
            
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground/90 text-center">
                🎯 End Content Fragmentation with Theta's Unified Platform
              </h3>
              
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Today's content consumers face a frustrating reality: juggling separate apps for ebooks, different platforms for audiobooks, 
                and yet another service for podcasts. This fragmentation creates friction in your content consumption, 
                making it harder to maintain reading habits and discover new content across formats.
              </p>
              
              <p className="font-body text-base text-foreground/75 leading-relaxed">
                <strong>Theta's mission</strong> is to unify your entire content universe into one seamless, beautiful experience. 
                We believe that the future of digital content lies in breaking down the artificial barriers between 
                ebooks, audiobooks, and podcasts - creating a truly unified platform where content flows naturally 
                between formats based on your context and preferences.
              </p>
              
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                Imagine starting an ebook during your morning commute, seamlessly switching to the audiobook version 
                while driving, and discovering related podcast episodes during your lunch break - all within the same platform, 
                with perfect synchronization and intelligent recommendations. This is the Theta vision: 
                <em>unified, intelligent, and effortless content consumption</em>.
              </p>
              
              <div className="flex justify-center pt-4">
                <div className="text-sm text-foreground/60 space-y-1 text-center">
                  <p>Learn more about digital content platforms:</p>
                  <div className="space-x-3">
                    <a 
                      href="https://www.goodreads.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow transition-colors underline"
                    >
                      Goodreads Reading Community
                    </a>
                    <span>•</span>
                    <a 
                      href="https://www.audible.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow transition-colors underline"
                    >
                      Audible Audiobooks
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;