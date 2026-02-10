import { motion } from "framer-motion";
import { Settings, LayoutDashboard, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Setup",
    description: "Configure your accounts, team, and preferences. Import existing data or start fresh in minutes.",
  },
  {
    icon: LayoutDashboard,
    step: "02",
    title: "Manage",
    description: "Handle daily operations — invoicing, payments, expenses, and user management from a single dashboard.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Control",
    description: "Monitor performance with real-time analytics, smart reports, and predictive insights that keep you ahead.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">How It Works</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Three Steps to <span className="text-gradient-gold">Full Control</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-subtle bg-gradient-gold-subtle">
                <step.icon size={32} className="text-primary" />
              </div>
              <span className="font-display text-xs font-bold tracking-widest text-primary">{step.step}</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
