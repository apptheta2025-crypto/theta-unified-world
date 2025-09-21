import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
const WishlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, source: 'wishlist' }]);

      if (error) {
        if (error.code === '23505') { // unique constraint violation
          toast({
            title: "Already on the list!",
            description: "This email is already registered for our waitlist."
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "You're in!",
          description: "Welcome to the Theta universe. We'll keep you posted on our launch."
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
  return <section id="wishlist" className="py-16 lg:py-24 bg-gradient-subtle text-foreground">
      <div className="container-wide">
        <div className="text-center space-y-8 lg:space-y-10 max-w-3xl mx-auto">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Be the First to Experience <span className="text-gradient-primary">Theta</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              Join our wishlist to get early access, exclusive updates, and be notified 
              the moment we launch.
            </p>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="your.email@example.com" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="flex-1 h-14 px-4 font-body bg-foreground/5 border-border text-foreground placeholder:text-foreground/60 focus-visible:ring-primary focus-visible:border-primary" 
              required 
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              className="bg-gradient-primary hover:shadow-glow font-body font-semibold px-8 h-14 transition-spring"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Count Me In!'}
            </Button>
          </form>

          {/* Trust indicator */}
          
        </div>
      </div>
    </section>;
};
export default WishlistSection;