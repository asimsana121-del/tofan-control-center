import { motion } from "framer-motion";
import {
  Calculator,
  Wallet,
  Users2,
  Landmark,
  Package,
  ShoppingCart,
  FileText,
  FileSignature,
  MessageCircle,
  BarChart3,
  Building2,
  ScrollText,
  Activity,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Accounting Management",
    description: "Complete double-entry bookkeeping, chart of accounts, journal entries, and automated reconciliation in one place.",
  },
  {
    icon: Wallet,
    title: "Budget Management",
    description: "Full budget management by month and by organization branches, with flexible data creation.",
  },
  {
    icon: Users2,
    title: "Parties Manager",
    description: "Manage accounts receivable and payable with business partners your organization works with.",
  },
  {
    icon: Landmark,
    title: "Capital Manager",
    description: "Accurate calculation of all cash and non-cash capital, including barcode creation and printing for each record.",
  },
  {
    icon: Package,
    title: "Inventory & Logistic",
    description: "Warehouse and logistics management, from purchase forms to warehouse registration.",
  },
  {
    icon: ShoppingCart,
    title: "Sell Service or Product",
    description: "Ability to sell services and products independently.",
  },
  {
    icon: FileText,
    title: "Billing & Invoicing",
    description: "Create professional invoices, track payments, manage subscriptions, and automate recurring billing.",
  },
  {
    icon: FileSignature,
    title: "Contract Management",
    description: "Create customer contracts, archive documents, and print contracts on custom letterheads.",
  },
  {
    icon: MessageCircle,
    title: "Chat Group",
    description: "Internal group chat with member tagging for event notifications.",
  },
  {
    icon: BarChart3,
    title: "Smart Reports & Analytics",
    description: "One-click profit & loss, balance sheets, cash flow reports, and custom dashboards.",
  },
  {
    icon: Building2,
    title: "Branch Manager",
    description: "Manage multiple organization branches based on admin-defined policies.",
  },
  {
    icon: ScrollText,
    title: "Log Management",
    description: "Complete logging of every system event across all access levels.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Live dashboards for revenue, expenses, user activity, and system health.",
  },
  {
    icon: Lock,
    title: "User & Role Control",
    description: "Advanced role-based access with custom permissions and enterprise-grade user management.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-radial-gold opacity-30" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Features</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Run Your Business</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            All the needs that a company or organization requires in today's business environment — all in one powerful platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_30px_hsl(43_90%_55%/0.06)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold-subtle border border-gold-subtle transition-transform duration-300 group-hover:scale-110">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
