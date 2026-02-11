import { motion } from "framer-motion";
import { Zap, Brain, Shield } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "FAST",
    description: "Process thousands of transactions in seconds. Real-time data syncing across all modules keeps your business moving at full speed.",
  },
  {
    icon: Brain,
    title: "SMART",
    description: "The system automatically analyzes and processes all financial calculations and transactions with high intelligence and zero errors.",
  },
  {
    icon: Shield,
    title: "IN CONTROL",
    description: "Granular permissions, audit trails, and role-based access ensure you always know who did what, when, and why.",
  },
];

const ValueProposition = () => {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Why <span className="text-gradient-gold">TOFAN TRACKER</span>?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Built for businesses that demand speed, intelligence, and complete control over their financial operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(43_90%_55%/0.08)]"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold-subtle border border-gold-subtle">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-wide text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
