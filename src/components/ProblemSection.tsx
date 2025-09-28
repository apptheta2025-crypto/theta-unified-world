import { Puzzle } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProblemSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ triggerOnce: true });
  const [currentProblem, setCurrentProblem] = useState(0);
  return <section 
      ref={sectionRef}
      className={`relative py-16 lg:py-24 bg-gradient-problem-to-benefits overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
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
              
              <p className="font-body text-base sm:text-lg text-foreground/70 text-center max-w-2xl mx-auto">
                Stop switching between multiple apps. Theta brings all your content together in one beautiful, intelligent platform.
              </p>
              
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Today's content consumers face a frustrating reality: juggling separate apps for ebooks, different platforms for audiobooks, 
                and yet another service for podcasts. This fragmentation creates friction in your content consumption, 
                making it harder to maintain reading habits and discover new content across formats.
              </p>
              
              
              
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;