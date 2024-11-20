import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-md bg-transparent border-b border-neutral-700/50">
      <div className="container px-6 mx-auto relative flex justify-between items-center lg:text-sm">
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12 rounded-full shadow-lg" src={logo} alt="Logo" />
          <span className="text-2xl font-semibold text-white tracking-tight">BeyondReality</span>
        </div>

        {/* Navigation Links for Larger Screens */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium">
          <li>
            <a href="#features" className="hover:text-yellow-300 transition duration-200">
              Features
            </a>
          </li>
          <li>
            <a href="#workflow" className="hover:text-yellow-300 transition duration-200">
              Workflow
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-yellow-300 transition duration-200">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-yellow-300 transition duration-200">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex space-x-8">
          <a href="#" className="py-2 px-4 border-2 border-white text-white rounded-md hover:bg-gray-100 hover:text-gray-800 transition duration-300">
            Sign In
          </a>
          <a
            href="#"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create an account
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-white p-2">
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden flex items-center justify-center">
          <div className="bg-neutral-900 w-3/4 p-6 rounded-lg max-h-[80vh] overflow-y-auto">
            <ul className="space-y-4 text-center text-white">
              <li>
                <a href="#features" className="hover:text-yellow-300 transition duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-yellow-300 transition duration-200">
                  Workflow
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-yellow-300 transition duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-yellow-300 transition duration-200">
                  Testimonials
                </a>
              </li>
            </ul>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="#"
                className="py-2 px-4 border-2 border-white text-white rounded-md hover:bg-gray-100 hover:text-gray-800 transition duration-300"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

