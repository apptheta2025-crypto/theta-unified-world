import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import appMockup from '@/assets/theta-app-mockup.jpg';
const HeroSection = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Theta Universe!",
        description: "You've been added to our wishlist. We'll notify you when we launch."
      });
      setEmail('');
    }
  };
  return <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                The Unified Universe for{' '}
                <span className="text-gradient-primary">Written and Spoken Word</span>
              </h1>
              
              <p className="font-body text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl">
                Ebooks, audiobooks, and podcasts, together in one beautiful platform. 
                Stop juggling apps and start experiencing content seamlessly.
              </p>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md rounded-lg">
              <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 h-12 px-4 font-body border-border focus-visible:ring-primary" required />
              <Button type="submit" className="bg-gradient-primary hover:shadow-glow font-body font-semibold px-6 h-12 transition-spring rounded-md">
                Join the Wishlist
              </Button>
            </form>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;