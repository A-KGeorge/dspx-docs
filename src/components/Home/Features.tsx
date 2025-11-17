import { featuresList } from "./data";

const Features = () => (
  <section id="features" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Everything you need for high-speed signal processing.
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          From raw audio to complex sensor data, `dspx` provides the tools.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresList.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg flex space-x-4"
          >
            <div className="shrink-0 flex items-center">
              {/* Corrected Tailwind syntax for CSS variables */}
              <feature.icon className="h-8 w-8 text-(--ifm-color-primary)" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
