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
            
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground/90 animate-fade-in">
                🎯 End Content Fragmentation.
              </h3>
              
              <div className="relative max-w-3xl mx-auto">
                <p className="font-body text-xl text-foreground/70 leading-relaxed">
                  Readers and listeners today are <span className="text-foreground font-semibold">forced to juggle</span> separate apps for ebooks, audiobooks, and podcasts. 
                  <br /><br />
                  <span className="text-gradient-primary font-semibold">Theta's mission:</span> Unite all your favorite content in one beautiful, intelligent ecosystem.
                </p>
                
                {/* Decorative Quote Marks */}
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-heading">"</div>
                <div className="absolute -bottom-8 -right-4 text-6xl text-primary/20 font-heading rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;