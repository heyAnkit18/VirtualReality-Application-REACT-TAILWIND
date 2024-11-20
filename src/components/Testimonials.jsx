import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="testimonials-section py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold text-white mb-12">
          What People Are Saying
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-neutral-800 text-white rounded-lg p-6 border border-neutral-700 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-300"
            >
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full border border-neutral-500 mr-4"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="text-white font-semibold">{testimonial.user}</h6>
                  <span className="text-neutral-400 text-sm italic">
                    {testimonial.company}
                  </span>
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
