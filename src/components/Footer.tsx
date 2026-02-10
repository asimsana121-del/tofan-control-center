const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-gold">
                <span className="text-xs font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                TOFAN <span className="text-gradient-gold">TRACKER</span>
              </span>
            </div>
            <p className="mt-2 max-w-xs text-xs text-muted-foreground">
              Smart Accounting & Business Control System. Fast, Smart, In Control.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#pricing" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
            <a href="#faq" className="text-xs text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
            <a
              href="mailto:contact@tofantracker.com"
              className="rounded-lg bg-secondary px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TOFAN TRACKER (TOFAN ONE). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
