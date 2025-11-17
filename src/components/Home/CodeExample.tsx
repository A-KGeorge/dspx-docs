import { Code } from "@mui/icons-material";

const CodeExample = () => {
  const codeString = `
import { DspPipeline, Filters } from 'dspx';

// 1. Create a pipeline
const pipeline = new DspPipeline();

// 2. Define a 10-tap low-pass FIR filter
const taps = [0.05, 0.05, 0.1, 0.1, 0.4, 0.1, 0.1, 0.05, 0.05];
const firFilter = Filters.fir(taps);

// 3. Add stage to pipeline
pipeline.addStage(firFilter);

// 4. Process data
const input = new Float32Array(1024).map((_, i) => 
  Math.sin(i * 0.1) + // Low-freq signal
  Math.random() * 0.2 // High-freq noise
);

const output = pipeline.process(input);

// output now contains the filtered signal
console.log(output);
  `;
  return (
    <section id="examples" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Simple & Powerful API
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Get started in minutes with our fluent pipeline interface.
          </p>
        </div>
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-4 bg-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 bg-red-500 rounded-full"></span>
              <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-gray-300 text-sm font-medium">
              example.js
            </span>
            <Code className="h-5 w-5 text-gray-400" />
          </div>
          <pre className="language-javascript p-6 text-sm overflow-x-auto">
            <code
              className="language-javascript"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {codeString.trim()}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
