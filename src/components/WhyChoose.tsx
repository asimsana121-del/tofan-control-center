import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Server, Target } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and regular security audits keep your data safe.",
  },
  {
    icon: Gauge,
    title: "Peak Performance",
    description: "Optimized infrastructure ensures sub-second load times even with millions of records.",
  },
  {
    icon: Server,
    title: "Infinite Scalability",
    description: "Cloud-native architecture scales automatically to meet growing business demands.",
  },
  {
    icon: Target,
    title: "Built for Real Business",
    description: "Designed by accountants and engineers who understand real-world business challenges.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Built for Businesses That{" "}
              <span className="text-gradient-gold">Demand More</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              TOFAN TRACKER isn't just another accounting tool. It's a complete business control system
              engineered for performance, security, and growth.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20"
              >
                <reason.icon size={20} className="mb-3 text-primary" />
                <h3 className="font-display text-sm font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
