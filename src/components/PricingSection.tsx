import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started with smart accounting.",
    features: [
      "Up to 5 users",
      "Core accounting modules",
      "Basic reports & dashboards",
      "Invoice management",
      "Email support",
      "1 GB storage",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing businesses that need advanced analytics and control.",
    features: [
      "Up to 25 users",
      "All accounting modules",
      "Smart reports & analytics",
      "Advanced invoicing & billing",
      "Role-based access control",
      "Priority support",
      "10 GB storage",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited users",
      "All Professional features",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option",
      "24/7 premium support",
      "Unlimited storage",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Plans That <span className="text-gradient-gold">Scale With You</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start small and grow. Every plan includes core features to manage your business efficiently.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-primary/40 bg-gradient-gold-subtle glow-gold"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
                    : "border border-border bg-secondary text-foreground hover:border-primary/30"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
