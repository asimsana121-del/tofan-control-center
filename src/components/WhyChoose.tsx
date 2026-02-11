import { motion } from "framer-motion";
import { Building, Building2, Landmark } from "lucide-react";
const expensesDashboard = "/screenshots/expenses-dark.png";

const audiences = [
  {
    icon: Building,
    label: "Small Businesses",
    description: "Streamline operations from day one with tools built for lean teams.",
  },
  {
    icon: Building2,
    label: "Medium Companies",
    description: "Scale confidently with advanced analytics, budgeting, and multi-branch control.",
  },
  {
    icon: Landmark,
    label: "Large Enterprises",
    description: "Enterprise-grade security, unlimited capacity, and full customization.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40 border-t border-border">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-gold opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl">
            <span className="text-gradient-gold">Fast.</span>{" "}
            <span className="text-gradient-gold">Smart.</span>{" "}
            <span className="text-gradient-gold">In Control.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            One platform built to power businesses of every size — from startups to enterprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="rounded-2xl border border-border bg-card p-2 glow-gold">
            <img
              src={expensesDashboard}
              alt="TOFAN TRACKER Expenses tracking"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {audiences.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_60px_hsl(43_90%_55%/0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-gold-subtle opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold-subtle border border-gold-subtle">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
