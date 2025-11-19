import { Code } from "@mui/icons-material";
import CodeBlock from "@theme/CodeBlock";

const CodeExample = () => {
  const codeString = `
import { createDspPipeline } from "dspx";

// 1. Create a pipeline
const pipeline = createDspPipeline();

// 2. Define a Kernel
const kernel = new Float32Array(32).map(() => Math.random());

// Sample input
const input = new Float32Array(1024); 
for (let i = 0; i < 1024; i++) {
  input[i] = Math.sin((2 * Math.PI * 50 * i) / 10000);
}

// 3. Add stage to pipeline
pipeline.convolution({
  kernel,
  mode: "batch", // Use batch mode for fair comparison with naive JS
  method: "auto", // Let dspx choose between direct and FFT
});

const output = pipeline.process(input, { channels: 1});

// output now contains the convolution of the input signal
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
          <CodeBlock language="javascript" className="mb-0!">
            {codeString.trim()}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
