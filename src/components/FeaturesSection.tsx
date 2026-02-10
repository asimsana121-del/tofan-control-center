import { motion } from "framer-motion";
import {
  Calculator,
  Users,
  BarChart3,
  FileText,
  Lock,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Financial & Accounting Management",
    description: "Complete double-entry bookkeeping, chart of accounts, journal entries, and automated reconciliation in one place.",
  },
  {
    icon: Users,
    title: "User & Role Control",
    description: "Define custom roles, assign permissions, and manage team access with enterprise-grade user management.",
  },
  {
    icon: BarChart3,
    title: "Smart Reports & Analytics",
    description: "Generate profit & loss, balance sheets, cash flow reports, and custom dashboards with a single click.",
  },
  {
    icon: FileText,
    title: "Billing & Invoicing",
    description: "Create professional invoices, track payments, manage subscriptions, and automate recurring billing.",
  },
  {
    icon: Lock,
    title: "Secure Access & Permissions",
    description: "Multi-layer security with 2FA, IP restrictions, session management, and complete audit logging.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Live dashboards showing revenue, expenses, user activity, and system health at a glance.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-gold opacity-50" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Features</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Run Your Business</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From accounting to analytics, TOFAN TRACKER covers every aspect of modern business management.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/20"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold-subtle border border-gold-subtle">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
