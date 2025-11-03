import { Twitter, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://x.com/account/access" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/boost1connect/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://t.me/boost1connect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-6 h-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Social Growth. All rights reserved.</p>
            <p className="text-sm mt-2">Powered by Web3 • Payments via USDT & USDC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
