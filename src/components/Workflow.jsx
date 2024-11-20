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
    <section className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

