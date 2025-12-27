import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import thetaBg from '@/assets/theta-bg.png';
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
  return <section className="relative w-full aspect-video min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theta Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${thetaBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />

      <div className="container-wide relative z-10 flex items-end justify-center min-h-full pb-8 lg:pb-12">
        <div className="max-w-2xl text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-inter font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white" style={{
              letterSpacing: '-0.06em'
            }}>
                The Unified
                <br />
                <span className="text-gradient-primary text-glow animate-pulse-slow">Universe</span>
                <br />
                for Content
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-cta hover:shadow-glow transition-all duration-300 font-bold py-6 shadow-2xl hover:scale-105 relative overflow-hidden group rounded-full">
                <a href="https://create.theta.co.in" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center px-[47px] gap-0 border rounded-lg border-solid border-muted-foreground bg-white/20">
                  <span className="relative z-10 flex items-center gap-2 text-lg">
                    ✨ Try Theta Create Beta
                  </span>
                  <span className="text-xs font-normal opacity-80">(Free to Use)</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                </a>
              </Button>
              <Button onClick={() => {
              const waitlistSection = document.getElementById('wishlist');
              waitlistSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }} size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-bold py-6 shadow-2xl hover:scale-105 rounded-full flex flex-col items-center px-[47px] gap-0">
                <span className="text-lg">🚀 Join Waitlist</span>
                <span className="text-xs font-normal opacity-80">(For The Theta App)</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;