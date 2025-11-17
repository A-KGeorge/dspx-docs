import { GitHub, MenuBook, Layers, Article } from "@mui/icons-material";

const Header = () => (
  <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="shrink-0 flex items-center">
          {/* Corrected Tailwind syntax for CSS variables */}
          <Layers className="h-8 w-8 text-(--ifm-color-primary)" />
          <span className="text-white text-2xl font-bold ml-3">dspx</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#performance"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Performance
          </a>
          <a
            href="#examples"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Examples
          </a>
          <a
            href="#blog"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <Article sx={{ fontSize: "1.25rem", marginRight: "0.25rem" }} />
            Blog
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <MenuBook sx={{ fontSize: "1.25rem", marginRight: "0.25rem" }} />
            Docs
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <GitHub sx={{ fontSize: "1.25rem", marginRight: "0.25rem" }} />
            GitHub
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
