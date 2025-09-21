import { Instagram, Linkedin } from 'lucide-react';
import thetaLogo from '@/assets/theta-logo.png';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-dark text-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Logo and Copyright */}
          <div className="flex items-center space-x-3">
            <img src={thetaLogo} alt="Theta unified platform logo" className="h-8 w-8" />
            <span className="font-heading font-bold text-xl text-white">Theta</span>
            <span className="hidden sm:inline font-body text-sm text-background/70">
              © 2025 Theta. All rights reserved.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-background/70">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Play
            </a>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/theta.app_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth group"
              aria-label="Follow Theta on Instagram"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/company/apptheta/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth group"
              aria-label="Connect with Theta on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Mobile copyright and links */}
        <div className="sm:hidden text-center mt-6 space-y-3">
          <span className="font-body text-sm text-background/70 block">
            © 2025 Theta. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-background/60">
            <a href="/privacy" className="hover:text-background/80 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-background/80 transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-background/80 transition-colors">Contact</a>
          </div>
          <p className="text-xs text-background/50 mt-2">
            Unified platform for ebooks, audiobooks, and podcasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;