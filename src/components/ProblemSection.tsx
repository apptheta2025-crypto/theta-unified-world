import { Puzzle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Puzzle className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Tired of the <span className="text-gradient-primary">Clutter</span>?
            </h2>
            
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-foreground/90">
                End Content Fragmentation.
              </h3>
              
              <p className="font-body text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Readers and listeners today are forced to use separate apps for ebooks, audiobooks, 
                and podcasts. Theta's mission is to solve this by bringing all your favorite content 
                into a single, unified ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;