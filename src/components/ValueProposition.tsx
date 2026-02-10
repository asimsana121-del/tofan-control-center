import { motion } from "framer-motion";
import { Zap, Brain, Shield } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of transactions in seconds. Real-time data syncing across all modules keeps your business moving at full speed.",
  },
  {
    icon: Brain,
    title: "Intelligent Reports",
    description: "AI-powered analytics turn raw data into actionable insights. Get smart recommendations and predictive forecasts automatically.",
  },
  {
    icon: Shield,
    title: "Full Control",
    description: "Granular permissions, audit trails, and role-based access ensure you always know who did what, when, and why.",
  },
];

const ValueProposition = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Why <span className="text-gradient-gold">TOFAN TRACKER</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for businesses that demand speed, intelligence, and complete control over their financial operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:bg-surface-elevated"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold-subtle border border-gold-subtle">
                <value.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
