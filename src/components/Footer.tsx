import { Twitter, Instagram, Linkedin } from 'lucide-react';
import thetaLogo from '@/assets/theta-logo.png';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-dark text-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Logo and Copyright */}
          <div className="flex items-center space-x-3">
            <img src={thetaLogo} alt="Theta" className="h-8 w-8" />
            <span className="font-heading font-bold text-xl text-white">Theta</span>
            <span className="hidden sm:inline font-body text-sm text-background/70">
              © 2025 Theta. All rights reserved.
            </span>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth group"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth group"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Mobile copyright */}
        <div className="sm:hidden text-center mt-4">
          <span className="font-body text-sm text-background/70">
            © 2025 Theta. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;