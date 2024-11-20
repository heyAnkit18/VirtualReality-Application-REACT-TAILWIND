import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-300 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="mt-12 border-t border-neutral-700 pt-6 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} BeyondLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

