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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={thetaLogo} alt="Theta" className="h-8 w-8" />
            <span className="font-heading font-bold text-xl">Theta</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#app" className="font-body font-medium text-foreground/80 hover:text-foreground transition-smooth">
              The App
            </a>
            <a href="#creators" className="font-body font-medium text-foreground/80 hover:text-foreground transition-smooth">
              For Creators
            </a>
            <a href="#home" className="font-body font-medium text-foreground/80 hover:text-foreground transition-smooth">
              Home
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToWishlist}
            className="bg-gradient-primary hover:shadow-glow font-body font-semibold px-6 py-2 transition-spring"
          >
            Join Wishlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;