const BlogSection = () => (
  <section id="blog" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          From the Blog
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          News, articles, and updates from the dspx team.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Blog Post 1 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col">
          <span className="text-sm text-gray-400">November 10, 2025</span>
          <h3 className="text-xl font-semibold text-white mt-2">
            Announcing dspx 1.0
          </h3>
          {/* Use 'grow' for flex-grow: 1 */}
          <p className="mt-2 text-gray-400 grow">
            After months of development, we're excited to announce the first
            stable release of dspx, bringing native performance to JavaScript
            DSP.
          </p>
          <a
            href="#"
            // Corrected Tailwind syntax for CSS variables
            className="mt-4 text-(--ifm-color-primary) hover:text-(--ifm-color-primary-light) font-semibold"
          >
            Read more &rarr;
          </a>
        </div>
        {/* Blog Post 2 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col">
          <span className="text-sm text-gray-400">November 1, 2025</span>
          <h3 className="text-xl font-semibold text-white mt-2">
            Deep Dive: SIMD in Node.js
          </h3>
          <p className="mt-2 text-gray-400 grow">
            How we used C++ and NEON intrinsics to make dspx one of the fastest
            DSP libraries available in any dynamic language.
          </p>
          <a
            href="#"
            // Corrected Tailwind syntax for CSS variables
            className="mt-4 text-(--ifm-color-primary) hover:text-(--ifm-color-primary-light) font-semibold"
          >
            Read more &rarr;
          </a>
        </div>
        {/* Blog Post 3 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col">
          <span className="text-sm text-gray-400">October 22, 2025</span>
          <h3 className="text-xl font-semibold text-white mt-2">
            Tutorial: Real-time Feature Extraction
          </h3>
          <p className="mt-2 text-gray-400 grow">
            Learn how to use the dspx pipeline API to build a real-time RMS and
            Z-Score calculator for streaming sensor data.
          </p>
          <a
            href="#"
            // Corrected Tailwind syntax for CSS variables
            className="mt-4 text-(--ifm-color-primary) hover:text-(--ifm-color-primary-light) font-semibold"
          >
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
