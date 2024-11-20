import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "This is an amazing platform that has revolutionized my work.",
      user: "Jane Doe",
      company: "Tech Corp",
      image: "/path-to-image/jane.jpg",
    },
    {
      text: "VR is the future, and this project is leading the way!",
      user: "John Smith",
      company: "Innovate Inc.",
      image: "/path-to-image/john.jpg",
    },
    {
      text: "Incredible experience! It felt like I was truly there.",
      user: "Alice Brown",
      company: "Virtual Visions",
      image: "/path-to-image/alice.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">What People Are Saying</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-user-info">
                <img
                  className="testimonial-user-image"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="testimonial-user-name">{testimonial.user}</h6>
                  <span className="testimonial-user-company">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
