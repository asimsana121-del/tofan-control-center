import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-subtle bg-gradient-gold-subtle px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Smart Accounting & Business Control</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            Total Control Over
            <br />
            <span className="text-gradient-gold">Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl"
          >
            TOFAN TRACKER is the all-in-one accounting and management system
            that gives you real-time insights, smart reports, and full control
            over every aspect of your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#cta"
              className="group flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-gold-strong"
            >
              Request a Demo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-muted"
            >
              <Play size={14} />
              View Pricing
            </a>
          </motion.div>
        </div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl lg:mt-20"
        >
          <div className="rounded-2xl border border-border bg-card p-2 glow-gold">
            <img
              src={heroDashboard}
              alt="TOFAN TRACKER Dashboard showing financial analytics, revenue charts, and invoices"
              className="w-full rounded-xl"
              loading="eager"
            />
          </div>
          {/* Gradient fade at bottom */}
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
