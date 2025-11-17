import { GitHub, MenuBook } from "@mui/icons-material";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-700">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="#"
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          <GitHub />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          <MenuBook />
        </a>
      </div>
      <p className="text-gray-400">
        <span className="font-bold">dspx</span> - High-Performance DSP for
        JavaScript.
      </p>
      <p className="mt-2 text-gray-500">
        Released under the Apache-2.0 License.
      </p>
    </div>
  </footer>
);

export default Footer;
