import { BookOpen, Headphones, Mic, Zap, Users, Globe } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Unified Content Library",
      description: "Access ebooks, audiobooks, and podcasts in one centralized platform. No more juggling multiple apps or subscriptions."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-create" />,
      title: "AI-Powered Discovery",
      description: "Our intelligent recommendation engine learns your preferences to suggest content you'll love across all formats."
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Seamless Format Switching",
      description: "Switch between reading and listening instantly. Pick up exactly where you left off with AI-powered synchronization."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-create" />,
      title: "Creator Ecosystem",
      description: "Connect directly with authors and creators. Discover exclusive content and support your favorite creators."
    },
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "Content Creation Tools",
      description: "Transform your ideas into published works with our AI-powered writing studio and instant audiobook generation."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent-create" />,
      title: "Global Content Access",
      description: "Explore content from creators worldwide. Multi-language support and cultural diversity at your fingertips."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Why Choose Theta for Your Content Experience?
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Theta transforms how you discover, consume, and create digital content. Our unified platform 
            eliminates the friction between different content formats, creating a seamless experience 
            that adapts to your lifestyle and preferences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Ready to Experience the Future of Content?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join our growing community of content enthusiasts who have discovered the power of unified 
            ebooks, audiobooks, and podcasts. Whether you're a casual reader or content creator, 
            Theta has something revolutionary for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
            <span>• Free to join</span>
            <span>• Early access benefits</span>
            <span>• Community-driven features</span>
            <span>• Regular updates and improvements</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;