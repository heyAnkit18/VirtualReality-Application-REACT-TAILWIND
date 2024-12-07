import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="testimonials-section py-16 bg-gradient-to-b from-indigo-800 via-purple-900 to-black">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold text-white mb-12">
          What People Are Saying
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-8 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  className="w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg mr-4 hover:scale-105 transition-transform duration-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="text-white font-semibold">{testimonial.user}</h6>
                  <span className="text-purple-400 text-sm italic">
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

