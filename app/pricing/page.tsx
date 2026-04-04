import { SectionHeading } from "@/components/site-shell";

export const metadata = {
  title: "Pricing — TempoOS",
  description: "Simple, transparent pricing for individuals and teams"
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For personal use",
    features: [
      "Basic week planning",
      "3 calendar integrations",
      "Limited focus protection",
      "Basic analytics"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professionals",
    features: [
      "Advanced AI planning",
      "Unlimited integrations",
      "Full focus protection",
      "Energy mapping",
      "Priority support"
    ]
  },
  {
    name: "Team",
    price: "$99",
    description: "For small teams",
    features: [
      "Everything in Pro",
      "Team coordination",
      "Shared calendars",
      "Team analytics",
      "Admin controls"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations",
    features: [
      "Everything in Team",
      "Dedicated support",
      "SAML/SSO",
      "Custom integrations",
      "On-premise options"
    ]
  }
];

export default function PricingPage() {
  return (
    <>
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Pay for what you need. Upgrade or downgrade at any time."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
            <p className="mt-2 text-3xl font-semibold text-white">{tier.price}</p>
            <p className="mt-2 text-sm text-slate-300">{tier.description}</p>
            
            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-slate-300">
                  <svg className="mr-2 h-4 w-4 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
              Get started
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
