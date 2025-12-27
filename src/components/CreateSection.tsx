import { PenTool, Mic, Upload, BarChart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [{
  icon: PenTool,
  title: 'AI Writing Studio',
  description: 'Go from a simple idea to a complete, structured manuscript with an intelligent writing assistant.'
}, {
  icon: Mic,
  title: 'Instant Audiobooks',
  description: 'Convert your finished ebook into a high-quality, human-like audiobook in minutes using AI. Choose from a variety of voices, accents, and languages.'
}, {
  icon: Upload,
  title: 'One-Click Publishing',
  description: 'Publish your ebook and audiobook directly to the global Theta audience with a single click.'
}, {
  icon: BarChart,
  title: 'Creator Analytics',
  description: 'Track reads, listens, completion rates, and audience demographics to understand your impact and grow your audience.'
}];
const CreateSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ triggerOnce: true });

  return <section 
      ref={sectionRef}
      id="creators" 
      className={`relative py-16 lg:py-24 bg-gradient-create-to-flywheel text-white overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh-dark opacity-70" />
      
      {/* Floating Creative Elements */}
      <div className="absolute top-16 right-10 w-28 h-28 bg-gradient-create rounded-full blur-3xl opacity-25 animate-blob" />
      <div className="absolute top-32 left-16 w-20 h-20 bg-accent-create/40 rounded-2xl blur-xl opacity-40 animate-float animation-delay-1s" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-30 animate-pulse-slow animation-delay-3s" />
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
      backgroundImage: `linear-gradient(90deg, hsl(var(--accent-create)) 1px, transparent 1px), linear-gradient(hsl(var(--accent-create)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />
      
      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--accent-create)) 35px, hsl(var(--accent-create)) 36px)`
    }} />

      <div className="container-wide relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white">The Theta Create App</h2>
            <p className="font-heading font-semibold text-2xl sm:text-3xl text-gradient-create text-glow">Read. Listen. Create.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => <div key={index} className="group relative">
                <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-accent-create/50 transition-all duration-500 hover:shadow-glow-create hover:-translate-y-3 h-80">
                  {/* Feature glow effect */}
                  <div className="absolute inset-0 bg-gradient-create rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-create rounded-2xl flex items-center justify-center group-hover:shadow-glow-create group-hover:scale-110 transition-spring">
                        <feature.icon className="w-7 h-7 text-accent-create-foreground" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-white group-hover:text-gradient-create transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-body text-white/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a 
              href="https://create.theta.co.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-create hover:shadow-glow-create transition-all duration-300 font-bold px-12 py-4 text-lg shadow-2xl hover:scale-105 rounded-full text-white"
            >
              ✨ Try Theta Create Beta
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default CreateSection;