import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calculator,
  TrendingDown,
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
    icon: LayoutDashboard,
    title: "Professional Dashboard",
    description: "An excellent and professional dashboard to manage all reports available in the program and branches.",
  },
  {
    icon: Calculator,
    title: "Accounting Management",
    description: "Complete double-entry bookkeeping, chart of accounts, journal entries, and automated reconciliation in one place.",
  },
  {
    icon: TrendingDown,
    title: "Expenses Tracker",
    description: "Prepares and income all expenses and income on a daily basis.",
  },
  {
    icon: Wallet,
    title: "Budget Manager",
    description: "Complete budget management for a month and for the organization's branches, the ability to create different data.",
  },
  {
    icon: Users2,
    title: "Parties Manager",
    description: "Ability to add accounts receivable and payable with business partners that an organization needs.",
  },
  {
    icon: Landmark,
    title: "Capital Manager",
    description: "Accurate calculation of all cash and non-cash capital of a company and the ability to create and print barcodes for each registered record.",
  },
  {
    icon: Package,
    title: "Inventory & Logistic",
    description: "Warehouse management and company logistics management from creating a purchase form to registering in a designated warehouse.",
  },
  {
    icon: ShoppingCart,
    title: "Sell Service or Product",
    description: "Possibility of selling services and products separately.",
  },
  {
    icon: FileText,
    title: "Invoicing",
    description: "Create professional invoices, track payments, manage subscriptions, and automate recurring billing.",
  },
  {
    icon: FileSignature,
    title: "Contract",
    description: "Creating a contract for each customer and recording customer documents as an archive and printing the contract on the desired letterhead.",
  },
  {
    icon: MessageCircle,
    title: "Chat Group",
    description: "Having a group chat and the ability to tag members to inform them of events.",
  },
  {
    icon: BarChart3,
    title: "Smart Reports",
    description: "Generate profit & loss, balance sheets, cash flow reports, and custom dashboards with a single click.",
  },
  {
    icon: Building2,
    title: "Branch Manager",
    description: "Ability to manage branches of an organization according to the policy created by the admin.",
  },
  {
    icon: ScrollText,
    title: "Log Manager",
    description: "A complete log of every event that occurs in the application by different access levels.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Live dashboards showing revenue, expenses, user activity, and system health at a glance.",
  },
  {
    icon: Lock,
    title: "User & Role Control",
    description: "Define custom roles, assign permissions, and manage team access with enterprise-grade user management.",
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
            All the needs that a company or organization needs in today's business, all in one place.
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
