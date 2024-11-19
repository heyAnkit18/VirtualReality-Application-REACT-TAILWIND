import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] bg-gradient-to-b from-purple-900 to-black py-16">
      <div className="text-center">
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-white rounded-full h-6 text-sm font-semibold px-4 py-1 uppercase tracking-wide">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-10 font-extrabold text-white">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl p-4 bg-neutral-800 hover:text-white"
          >
            <div className="flex items-center space-x-4">
              <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full shadow-lg">
                {feature.icon}
              </div>
              <div className="text-left">
                <h5 className="text-xl font-semibold">{feature.text}</h5>
                <p className="mt-2 text-md text-neutral-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
