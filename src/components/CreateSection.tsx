import { PenTool, Mic, Upload, BarChart } from 'lucide-react';
import createMockup from '@/assets/theta-create-mockup.jpg';

const features = [
  {
    icon: PenTool,
    title: 'AI Writing Studio',
    description: 'Go from a simple idea to a complete, structured manuscript with an intelligent writing assistant.'
  },
  {
    icon: Mic,
    title: 'Instant Audiobooks',
    description: 'Convert your finished ebook into a high-quality, human-like audiobook in minutes using AI. Choose from a variety of voices, accents, and languages.'
  },
  {
    icon: Upload,
    title: 'One-Click Publishing',
    description: 'Publish your ebook and audiobook directly to the global Theta audience with a single click.'
  },
  {
    icon: BarChart,
    title: 'Creator Analytics',
    description: 'Track reads, listens, completion rates, and audience demographics to understand your impact and grow your audience.'
  }
];

const CreateSection = () => {
  return (
    <section id="creators" className="py-16 lg:py-24 bg-gradient-dark text-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Creator Dashboard Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={createMockup} 
                alt="Theta Create Dashboard" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
                Theta Create
              </h2>
              <p className="font-heading font-semibold text-xl sm:text-2xl text-gradient-primary">
                Read. Listen. Create.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-spring">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {feature.title}
                    </h3>
                    <p className="font-body text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSection;