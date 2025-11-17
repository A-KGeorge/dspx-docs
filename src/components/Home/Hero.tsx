const Hero = () => (
  <section className="bg-gray-900 text-white pt-24 pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        {/* Corrected Tailwind syntax for CSS variables */}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-(--ifm-color-primary-light) to-(--ifm-color-primary)">
          dspx
        </span>
      </h1>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-100">
        Digital Signal Processing eXtensions for JavaScript.
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
        A high-performance DSP library for Node.js and Web environments,
        supercharged by C++ bindings, SIMD (NEON), and a modern pipeline
        architecture.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#examples"
          className="inline-block bg-(--ifm-color-primary) text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-(--ifm-color-primary-dark) transition-colors transform hover:-translate-y-0.5"
          style={{ textDecoration: "none", color: "white" }}
        >
          Get Started
        </a>
        <a
          href="#performance"
          className="inline-block bg-gray-700 text-gray-100 font-semibold px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-gray-600 transition-colors transform hover:-translate-y-0.5"
          style={{ textDecoration: "none" }}
        >
          View Benchmarks
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
