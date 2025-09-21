import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import thetaLogo from '@/assets/theta-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWishlist = () => {
    const wishlistSection = document.getElementById('wishlist');
    wishlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={scrollToTop}>
            <img src={thetaLogo} alt="Theta" className="h-8 w-8 transition-transform group-hover:rotate-12 group-hover:scale-110" />
            <span className="font-heading font-bold text-xl text-gradient-primary">Theta</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#app" className="relative font-body font-medium text-foreground/80 hover:text-foreground transition-smooth group">
              The App
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#creators" className="relative font-body font-medium text-foreground/80 hover:text-foreground transition-smooth group">
              For Creators
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-create transition-all group-hover:w-full"></span>
            </a>
            <button onClick={scrollToTop} className="relative font-body font-medium text-foreground/80 hover:text-foreground transition-smooth group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-nav-home transition-all group-hover:w-full"></span>
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToWishlist}
            className="bg-gradient-cta hover:shadow-glow font-body font-semibold px-6 py-2 hover-glow relative overflow-hidden group rounded-full"
          >
            <span className="relative z-10">Join Waitlist ✨</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;