import React from "react";

const Workflow = () => {
  const steps = [
    {
      title: "Step 1: Sign Up",
      description: "Create an account to access our VR platform and personalized content.",
      icon: "👤",
    },
    {
      title: "Step 2: Choose Your Experience",
      description: "Browse from a variety of virtual reality experiences and simulations.",
      icon: "🌐",
    },
    {
      title: "Step 3: Enter VR",
      description: "Connect your VR headset and immerse yourself in a new reality.",
      icon: "🕶️",
    },
    {
      title: "Step 4: Interact & Explore",
      description: "Engage with interactive environments and enjoy seamless navigation.",
      icon: "✨",
    },
  ];

  return (
    <section className="workflow-section">
      <div className="workflow-container">
        <h2 className="workflow-title">How It Works</h2>
        <div className="workflow-grid">
          {steps.map((step, index) => (
            <div key={index} className="workflow-card">
              <div className="workflow-icon">{step.icon}</div>
              <h3 className="workflow-step-title">{step.title}</h3>
              <p className="workflow-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

