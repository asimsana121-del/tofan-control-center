import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-subtle bg-gradient-gold-subtle p-12 text-center lg:p-16"
        >
          <div className="absolute inset-0 bg-radial-gold" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Take <span className="text-gradient-gold">Full Control</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Join hundreds of businesses that trust TOFAN TRACKER to manage their accounting,
              billing, and operations. Start your free demo today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:demo@tofantracker.com"
                className="group flex items-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-gold-strong"
              >
                Request a Demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:sales@tofantracker.com"
                className="rounded-xl border border-border bg-secondary px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
