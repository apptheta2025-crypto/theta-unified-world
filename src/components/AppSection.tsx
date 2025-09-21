import { BookOpen, Headphones, Upload, Sparkles, List, Bookmark } from 'lucide-react';
import appMockup from '@/assets/theta-app-mockup.jpg';

const features = [
  {
    icon: BookOpen,
    title: 'Unified Library',
    description: 'Your entire collection of ebooks, audiobooks, and podcasts in one place.'
  },
  {
    icon: Headphones,
    title: 'Seamless Switching',
    description: 'Instantly switch between reading an ebook and listening to its audiobook, picking up exactly where you left off. AI finds the exact line for you.'
  },
  {
    icon: Upload,
    title: 'Listen & Read Anything',
    description: 'Import your own local files—ebooks, documents, and audio—to use in the Theta player.'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Discovery',
    description: 'Get personalized recommendations for what to read or listen to next.'
  },
  {
    icon: List,
    title: 'Smart Tools',
    description: 'Create playlists, bookmark pages, highlight text, and generate instant AI summaries of books.'
  }
];

const AppSection = () => {
  return (
    <section id="app" className="py-16 lg:py-24 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
                The Theta App
              </h2>
              <p className="font-heading font-semibold text-xl sm:text-2xl text-gradient-primary">
                Read. Listen. Become.
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
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="Theta App Features" 
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;