import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-md bg-transparent border-b border-neutral-700/50">
      <div className="container px-6 mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12 rounded-full shadow-lg" src={logo} alt="Logo" />
          <span className="text-2xl font-semibold text-white tracking-tight">BeyondLens</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
