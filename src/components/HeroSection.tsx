import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import appMockup from '@/assets/theta-app-mockup.jpg';
const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('waitlist').insert([{
        email,
        source: 'hero'
      }]);
      if (error) {
        if (error.code === '23505') {
          // unique constraint violation
          toast({
            title: "Already on the list!",
            description: "This email is already registered for our waitlist."
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to the Theta Universe!",
          description: "You've been added to our wishlist. We'll notify you when we launch."
        });
        setEmail('');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-create rounded-full blur-xl opacity-30 animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                The Unified
                <br />
                <span className="text-gradient-primary text-glow animate-pulse-slow">Universe</span>
                <br />
                for Content
              </h1>
              
              <p className="font-body text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl">
                📚 Ebooks • 🎧 Audiobooks • 🎙️ Podcasts
                <br />
                <span className="text-foreground/90 font-semibold">All in one beautiful, unified experience.</span>
              </p>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-primary hover:shadow-glow font-body font-semibold px-8 py-3 hover-glow whitespace-nowrap"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist ✨'}
              </Button>
            </form>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <img 
                src={appMockup} 
                alt="Theta App Mockup" 
                className="max-w-full h-auto rounded-3xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow"
              />
              
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent-create/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-10 animate-pulse-slow -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;