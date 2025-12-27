import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Cookies from 'js-cookie';

const WishlistSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({
    triggerOnce: true
  });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [agreeToUpdates, setAgreeToUpdates] = useState(true);
  const [hasJoinedTheta, setHasJoinedTheta] = useState(false);

  useEffect(() => {
    // Check cookies for existing waitlist membership
    const thetaCookie = Cookies.get('theta_waitlist_joined');
    
    if (thetaCookie === 'true') {
      setHasJoinedTheta(true);
    }

    // Fetch waitlist count
    const fetchCount = async () => {
      try {
        const {
          count
        } = await supabase.from('waitlist').select('*', {
          count: 'exact',
          head: true
        });
        setWaitlistCount(count || 0);
      } catch (error) {
        console.error('Error fetching waitlist count:', error);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting || !agreeToUpdates) return;
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('waitlist').insert([{
        email,
        source: 'wishlist'
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
        // Set cookie to remember user joined (expires in 1 year)
        Cookies.set('theta_waitlist_joined', 'true', { expires: 365 });
        setHasJoinedTheta(true);
        
        toast({
          title: "You're in for 3 months FREE! 🎉",
          description: "Welcome to the Theta universe. We'll keep you posted on our launch."
        });

        // Send welcome email
        try {
          await supabase.functions.invoke('send-welcome-email', {
            body: {
              email,
              source: 'wishlist'
            }
          });
        } catch (emailError) {
          console.error('Error sending welcome email:', emailError);
        }
        setEmail('');
        setAgreeToUpdates(false);
        setWaitlistCount(prev => prev + 1);
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

  return (
    <section 
      ref={sectionRef} 
      id="wishlist" 
      className={`py-16 lg:py-24 bg-gradient-subtle text-foreground transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="container-wide">
        <div className="text-center space-y-8 lg:space-y-10 max-w-3xl mx-auto">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Be the First to Experience <span className="text-gradient-primary">Theta</span>
            </h2>
            
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              Get early access, exclusive updates, and be the first to know when we launch.
            </p>
          </div>

          {/* Social Proof */}
          {waitlistCount > 0 && (
            <div className="bg-gradient-primary/5 border border-primary/20 rounded-lg p-4 max-w-sm mx-auto">
              <p className="font-body text-sm font-medium text-primary">
                You're In!!
              </p>
            </div>
          )}

          {/* Theta Waitlist Form */}
          <div className="w-full max-w-lg mx-auto space-y-6">
            {hasJoinedTheta ? (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
                <p className="font-body text-2xl font-semibold text-primary mb-2">✅ You're Already In!</p>
                <p className="font-body text-lg text-foreground/90 leading-relaxed">
                  You've already joined the Theta waitlist. We'll notify you when we launch with your exclusive 3 months free offer!
                </p>
              </div>
            ) : (
              <>
                {/* Incentive */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <p className="font-body text-xl font-semibold text-primary mb-2">🎁 Early Bird Special</p>
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    Join now for a chance to get <span className="font-bold text-gradient-primary">3 months of Theta Premium free</span> when we launch!
                  </p>
                </div>

                {/* India Launch Notice */}
                <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                  <p className="font-body text-base text-foreground/80">
                    🇮🇳 <span className="font-semibold">Launching soon in India</span> • Premium plans from <span className="font-bold text-primary">₹159/month</span>
                  </p>
                </div>

                {/* Email Signup Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      className="flex-1 h-14 px-4 font-body bg-foreground/5 border-border text-foreground placeholder:text-foreground/60 focus-visible:ring-primary focus-visible:border-primary rounded-l-full" 
                      required 
                      disabled={isSubmitting} 
                    />
                    <Button 
                      type="submit" 
                      className="bg-gradient-cta hover:shadow-glow font-body font-semibold px-8 h-14 transition-spring rounded-r-full" 
                      disabled={isSubmitting || !agreeToUpdates}
                    >
                      {isSubmitting ? 'Adding...' : 'Get 3 Months FREE'}
                    </Button>
                  </div>
                  
                  {/* Agreement Checkbox */}
                  <div className="flex items-center space-x-2 justify-center">
                    <Checkbox 
                      id="agree-updates" 
                      checked={agreeToUpdates} 
                      onCheckedChange={checked => setAgreeToUpdates(!!checked)} 
                      disabled={isSubmitting} 
                    />
                    <Label htmlFor="agree-updates" className="text-sm text-foreground/70 cursor-pointer">
                      I agree to receive email updates about Theta's launch and features
                    </Label>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
