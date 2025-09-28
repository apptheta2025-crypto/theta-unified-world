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
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${thetaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      <div className="container-wide relative z-10 flex items-center justify-center min-h-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Theta: The Unified
                <br />
                <span className="text-gradient-primary text-glow animate-pulse-slow">Universe</span>
                <br />
                for Content
              </h1>
            </div>

            {/* Join Waitlist Button */}
            <div className="flex justify-center">
              <Button onClick={() => {
              const waitlistSection = document.getElementById('wishlist');
              waitlistSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }} size="lg" className="bg-gradient-cta hover:shadow-glow transition-all duration-300 font-bold px-12 py-4 text-lg shadow-2xl hover:scale-105 relative overflow-hidden group rounded-full">
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Join Waitlist
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;