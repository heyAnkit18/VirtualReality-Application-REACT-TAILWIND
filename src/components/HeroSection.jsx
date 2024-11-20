import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-blue-900 to-black"> 
     
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold text-white leading-tight tracking-tight mb-6 animate__animated animate__fadeInUp animate__delay-1s">
        VirtualR <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">build tools</span> for developers
      </h1>     
      <p className="mt-6 text-lg sm:text-xl text-center text-gray-400 max-w-3xl mx-auto opacity-90 animate__animated animate__fadeIn animate__delay-1.5s">
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
      </p>
      <div className="flex justify-center gap-6 mt-12 animate__animated animate__fadeIn animate__delay-2s">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-xl hover:from-orange-600 hover:to-red-700"
        >
          Start for free
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg shadow-lg transform transition-all hover:bg-white hover:text-gray-800 hover:scale-110 hover:border-gray-800"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-16 gap-8 animate__animated animate__fadeIn animate__delay-2.5s">
        <div className="w-full sm:w-1/2 p-4">
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 transform hover:rotate-3"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 transform hover:rotate-3"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 animate__animated animate__fadeIn animate__delay-3s">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-8 rounded-full shadow-lg text-lg transform transition-all hover:scale-110 hover:shadow-xl animate__pulse animate__infinite"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

