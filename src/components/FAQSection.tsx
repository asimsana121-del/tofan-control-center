import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What accounting standards does TOFAN TRACKER support?",
    a: "TOFAN TRACKER supports international accounting standards including IFRS and GAAP. The system is flexible enough to adapt to local regulations and custom chart of accounts structures.",
  },
  {
    q: "Is my financial data secure?",
    a: "Absolutely. We use AES-256 encryption, SSL/TLS for data in transit, and maintain SOC 2 Type II compliance. All data is backed up daily with point-in-time recovery.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are up and running within 24-48 hours. Our onboarding team helps you import existing data, configure accounts, and train your staff at no additional cost.",
  },
  {
    q: "Can I integrate with other tools?",
    a: "Yes. TOFAN TRACKER offers REST APIs, webhooks, and pre-built integrations with popular banking, CRM, and payment platforms. Enterprise plans include custom integration support.",
  },
  {
    q: "Do you offer support and training?",
    a: "All plans include email support and access to our knowledge base. Professional and Enterprise plans include priority support, live chat, and dedicated account management.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we prorate any differences.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
