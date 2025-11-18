import { GitHub } from "@mui/icons-material";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-700">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/A-KGeorge/dspx"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="text-gray-400 hover:text-gray-300 transition-colors" />
        </a>
      </div>
      <p className="text-gray-400">
        <span className="font-bold">dspx</span> - Digital Signal Processing
        eXtensions for JavaScript.
      </p>
      <p className="mt-2 text-gray-500">
        Released under the Apache-2.0 License.
      </p>
    </div>
  </footer>
);

export default Footer;
