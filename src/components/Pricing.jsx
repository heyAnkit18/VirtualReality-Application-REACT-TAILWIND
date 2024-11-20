import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 bg-gradient-to-b from-neutral-800 to-neutral-900 py-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center text-white my-8 tracking-wide">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-neutral-800 p-8 border-2 border-neutral-700 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <p className="text-4xl text-white mb-6 font-semibold">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-3">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="text-5xl text-white mb-6 font-bold">
                {option.price}
                <span className="text-neutral-400 text-lg"> /Month</span>
              </p>
              <ul className="space-y-4 text-neutral-300">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle2 className="text-orange-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 mt-8 bg-gradient-to-r from-orange-500 to-red-400 text-white text-xl font-semibold rounded-lg hover:bg-gradient-to-l hover:from-orange-600 hover:to-red-500 transition duration-300"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
