import { PenTool, Upload, Users, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    title: 'Create',
    description: 'Authors use Theta Create to write a book and generate its audiobook.'
  },
  {
    icon: Upload,
    title: 'Publish',
    description: 'The content is published directly to the Theta App.'
  },
  {
    icon: Users,
    title: 'Consume',
    description: 'A global audience discovers and enjoys the new content.'
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'More users attract more creators, making the ecosystem more valuable for everyone.'
  }
];

const FlywheelSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-flywheel-to-wishlist">
      <div className="container-wide">
        <div className="text-center space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              A Self-Sustaining <span className="text-gradient-primary">Ecosystem</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
              The Theta flywheel creates a virtuous cycle where creators and consumers 
              benefit from each other's participation.
            </p>
          </div>

          {/* Flywheel Diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 space-y-4 group hover:shadow-lg transition-spring h-56 flex flex-col">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-spring">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-body text-xs text-foreground/70 leading-snug">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Return Arrow (Desktop only) */}
            <div className="hidden lg:block relative mt-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-full max-w-2xl flex justify-center">
                  <svg 
                    width="400" 
                    height="100" 
                    viewBox="0 0 400 100"
                    className="text-primary/30"
                  >
                    <defs>
                      <marker 
                        id="arrowhead" 
                        markerWidth="10" 
                        markerHeight="7" 
                        refX="10" 
                        refY="3.5" 
                        orient="auto"
                        fill="currentColor"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" />
                      </marker>
                    </defs>
                    <path 
                      d="M 350 20 Q 200 80 50 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlywheelSection;