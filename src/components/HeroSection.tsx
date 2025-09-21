import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Unified Platform for
                <br />
                <span className="text-gradient-primary text-glow animate-pulse-slow">Ebooks, Audiobooks</span>
                <br />
                & Podcasts
              </h1>
              
              <p className="font-body text-lg sm:text-xl text-foreground/70 leading-relaxed text-center mx-auto">
                📚 Ebooks • 🎧 Audiobooks • 🎙️ Podcasts
                <br />
                <span className="text-foreground/90 font-semibold">All in one beautiful, unified experience.</span>
              </p>
            </div>

            {/* Join Waitlist Button */}
            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  const waitlistSection = document.getElementById('wishlist');
                  waitlistSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-gradient-cta hover:shadow-glow transition-all duration-300 font-bold px-12 py-4 text-lg shadow-2xl hover:scale-105 relative overflow-hidden group rounded-full"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Join Waitlist
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </Button>
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Be the first to experience the future of content consumption
            </p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;