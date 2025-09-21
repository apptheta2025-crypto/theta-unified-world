import { BookOpen, Headphones, Upload, Sparkles, List } from 'lucide-react';
const features = [{
  icon: BookOpen,
  title: 'Unified Library',
  description: 'Your entire collection of ebooks, audiobooks, and podcasts in one place.'
}, {
  icon: Headphones,
  title: 'Seamless Switching',
  description: 'Instantly switch between reading an ebook and listening to its audiobook, picking up exactly where you left off. AI finds the exact line for you.'
}, {
  icon: Upload,
  title: 'Listen & Read Anything',
  description: 'Import your own local files—ebooks, documents, and audio—to use in the Theta player.'
}, {
  icon: Sparkles,
  title: 'AI-Powered Discovery',
  description: 'Get personalized recommendations for what to read or listen to next.'
}, {
  icon: List,
  title: 'Smart Tools',
  description: 'Create playlists, bookmark pages, highlight text, and generate instant AI summaries of books.'
}];
const AppSection = () => {
  return <section id="app" className="relative py-16 lg:py-24 bg-gradient-app-to-create overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-60" />
      
      {/* Floating Book Icons */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-2xl blur-xl opacity-40 animate-float" />
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent/30 rounded-full blur-lg opacity-50 animate-blob animation-delay-2s" />
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />

      <div className="container-wide relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl">The Theta App</h2>
            <p className="font-heading font-semibold text-2xl sm:text-3xl text-gradient-primary text-glow">
              Read. Listen. Become.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className={`group relative ${index === 3 ? 'lg:col-start-2' : ''}`}>
                <div className="relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 h-80">
                  {/* Feature glow effect */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
                  
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-spring">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-gradient-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AppSection;