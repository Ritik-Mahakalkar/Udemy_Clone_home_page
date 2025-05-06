import React from "react";
import "./PricingPlans.css";

const plans = [
  {
    title: "Personal Plan",
    subtitle: "For you",
    audience: "Individual",
    price: "Starting at ₹850 per month",
    billing: "Billed monthly or annually. Cancel anytime.",
    button: "Start subscription",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
  },
  {
    title: "Team Plan",
    subtitle: "For your team",
    audience: "2 to 20 people",
    price: "₹2,000 a month per user",
    billing: "Billed annually. Cancel anytime.",
    button: "Start subscription",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    title: "Enterprise Plan",
    subtitle: "For your whole organization",
    audience: "More than 20 people",
    price: "Contact sales for pricing",
    billing: "",
    button: "Request a demo",
    features: [
      "Access to 27,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <div className="pricing-header">
              <h3>{plan.title}</h3>
              <p className="subtitle">{plan.subtitle}</p>
              <p className="audience">{plan.audience}</p>
              <p className="price">{plan.price}</p>
              <p className="billing">{plan.billing}</p>
              <button className="action-btn">{plan.button} →</button>
            </div>
            <ul className="features">
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
