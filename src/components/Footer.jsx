import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-300 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
         
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-4">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-all duration-300 text-lg"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Platform</h3>
            <ul className="space-y-4">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-all duration-300 text-lg"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Community</h3>
            <ul className="space-y-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-all duration-300 text-lg"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-neutral-700 pt-6 text-center">
          <p className="text-sm text-neutral-400">
            <span className="text-yellow-400">BeyondReality</span> &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://twitter.com" className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300">
              Twitter
            </a>
            <a href="https://facebook.com" className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300">
              Facebook
            </a>
            <a href="https://linkedin.com" className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


