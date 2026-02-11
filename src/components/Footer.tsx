import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import tofanLogo from "@/assets/tofan-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Logo + Description */}
          <div>
            <img src={tofanLogo} alt="TOFAN TRACKER" className="h-9" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              An Smart Accounting &amp; Business Control System
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Which preforme Fast - Smart - In Control
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</a></li>
              <li><a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a></li>
              <li><a href="#cta" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Request Demo</a></li>
              <li><a href="mailto:contact@tofantracker.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Visit Us */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Visit Us
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Ferdouse St, Herat - Afghanistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">0744442148</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TOFAN TRACKER (TOFAN ONE). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
