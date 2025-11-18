import { Kafka, Redis } from "../icons";
import { pivotData, pivotLatencyData } from "./helper";
import {
  Bolt,
  DeveloperBoard,
  ShowChart,
  Layers,
  HighlightOff,
  Balance,
  Storage,
  Hub,
  Insights,
} from "@mui/icons-material";
// Raw performance data for charts in nanoseconds
const rawFftData = {
  dspx: {
    "1024": 89_354_275.74175788,
    "65536": 201_630_618.71211654,
    "1048576": 118_664_848.44026712,
  },
  "tf.js": {
    "1024": 4_561_044.0514898375,
    "65536": 12_219_821.03600719,
    "1048576": 13_166_539.949735962,
  },
  "fft.js": {
    "1024": 5_131_803.147238458,
    "65536": 103_123_475.63374309,
    "1048576": 48_334_950.5276815,
  },
};

const rawFirData = {
  dspx: {
    "1024": 12_676_405.050747328,
    "65536": 40_266_163.66730622,
    "1048576": 50_975_736.62743485,
  },
  fili: {
    "1024": 4_174_650.413795529,
    "65536": 9_500_972.771107329,
    "1048576": 10_321_004.76877556,
  },
  naive_js: {
    "1024": 12_094_012.046775518,
    "65536": 13_025_504.038669478,
    "1048576": 13_578_487.226593312,
  },
};

const rawConvolutionData = {
  dspx: {
    "8": 140_629_157.54687858,
    "32": 75_651_340.77504273,
    "64": 38_345_327.950380415,
    "128": 35_248_621.75608493,
    "256": 42_680_560.0781466,
  },
  "tf.js": {
    "8": 14_027_157.069228249,
    "32": 13_955_588.112537121,
    "64": 13_389_805.229166793,
    "128": 13_631_749.729594545,
    "256": 13_104_500.472902365,
  },
  naive_js: {
    "8": 104_409_890.39004391,
    "32": 24_941_581.226831965,
    "64": 12_698_880.205860635,
    "128": 7_233_186.83598856,
    "256": 4_147_191.900015734,
  },
};

const rawMovingAverageData = {
  dspx: {
    "32": 84_058_231.2576155,
    "128": 91_753_703.13331296,
    "512": 86_070_762.52265555,
    "2048": 88_281_807.77261615,
    "8192": 82_232_483.43705952,
  },
  naive_js: {
    "32": 33_493_468.528323434,
    "128": 9_593_853.937321393,
    "512": 2_694_519.6850911686,
    "2048": 642_497.5838694833,
    "8192": 188_545.77511428224,
  },
};

const pipelines = {
  dspx: {
    "1": 33_971_614,
    "2": 50_524_823,
    "4": 74_607_423,
    "8": 86_856_359,
    "16": 92_395_116,
    "32": 100_911_190,
  },
};

const memory = {
  dspx: {
    "1024": 0.77,
    "65536": -0.09,
    "1048576": -0.14,
  },
};

const latency = [
  {
    size: 1024,
    p50: 0.127,
    p95: 0.214,
    p99: 0.267,
  },
  {
    size: 65536,
    p50: 1.781,
    p95: 2.338,
    p99: 2.47,
  },
  {
    size: 1048576,
    p50: 30.97,
    p95: 36.62,
    p99: 39.006,
  },
];

const fftChartData = pivotData(rawFftData);
const firChartData = pivotData(rawFirData);
const convolutionChartData = pivotData(rawConvolutionData);
const movingAverageChartData = pivotData(rawMovingAverageData);
const pipelineChartData = pivotData(pipelines);
const memoryChartData = pivotData(memory);
const latencyChartData = pivotLatencyData(latency);

// Chart data

export const slides = [
  {
    id: "fft",
    variant: "area",
    title: "FFT Throughput",
    XLabel: "Input Size",
    YLabel: "(samples/sec)",
    units: "samples/sec",
    data: fftChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "tf.js", color: "#f97316" },
      { key: "fft.js", color: "#ef4444" },
    ],
  },
  {
    id: "fir",
    variant: "area",
    title: "FIR Throughput",
    XLabel: "Input Size",
    YLabel: "(samples/sec)",
    units: "samples/sec",
    data: firChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "naive_js", color: "#ef4444" },
      { key: "fili", color: "#f97316" },
    ],
  },
  {
    id: "conv",
    variant: "area",
    title: "Convolution Throughput (Input size = 65536 samples)",
    XLabel: "Kernel Size",
    YLabel: "(samples/sec)",
    units: "samples/sec",
    data: convolutionChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "tf.js", color: "#f97316" },
      { key: "naive_js", color: "#ef4444" },
    ],
  },
  {
    id: "ma",
    variant: "area",
    title: "Moving Average (Input size = 65536 samples)",
    XLabel: "Window Size",
    YLabel: "(samples/sec)",
    units: "samples/sec",
    data: movingAverageChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "naive_js", color: "#ef4444" },
    ],
  },
  {
    id: "pipeline",
    variant: "area",
    title: "Concurrent Pipeline Scaling",
    XLabel: "Number of Concurrent Pipelines",
    YLabel: "(samples/sec)",
    units: "samples/sec",
    data: pipelineChartData,
    lines: [{ key: "dspx", color: "#25c2a0" }],
  },
  {
    id: "memory",
    variant: "bar",
    title: "Memory Growth per Iteration (50 iterations)",
    XLabel: "Input Size",
    YLabel: "KB/iteration",
    units: "KB/iteration",
    data: memoryChartData,
    lines: [{ key: "dspx", color: "#25c2a0" }],
  },
  {
    id: "latency",
    variant: "bar",
    title: "Latency",
    XLabel: "Input Size",
    YLabel: "Milliseconds",
    units: "Milliseconds",
    data: latencyChartData,
    lines: [
      { key: "p50", color: "#25c2a0" },
      { key: "p95", color: "#f97316" },
      { key: "p99", color: "#ef4444" },
    ],
  },
];

// Features data

export const featuresList = [
  {
    icon: Redis,
    title: "Low-Latency Redis State",
    description:
      "dspx’s ultra-low overhead makes Redis state persistence viable for soft real-time DSP. Filters, windows, and pipeline state survive worker restarts, enabling resilient serverless compute.",
  },
  {
    icon: Bolt,
    title: "Native Performance",
    description:
      "Core operations are written in C++ and optimized with SIMD (NEON on ARM) for blazing-fast execution, far exceeding native JS libraries.",
  },
  {
    icon: Layers,
    title: "Modern Pipeline API",
    description:
      "Chain multiple processing stages together with a simple, fluent API.",
    code: `pipeline.filter({}).fft({}).process(data)`,
  },
  {
    icon: DeveloperBoard,
    title: "Advanced DSP Toolkit",
    description:
      "Includes FFT, FIR/IIR filters, convolution, resampling, STFT, and adaptive filters (LMS/RLS) right out of the box.",
  },
  {
    icon: ShowChart,
    title: "Time-Series Analysis",
    description:
      "Built-in support for real-time feature extraction like Moving Average, RMS, Variance, Z-Score, and more.",
  },
  {
    icon: Insights,
    title: "Observability & Logging",
    description:
      "Structured, topic-based logs with batched delivery. Route errors, performance metrics, and debug logs to any backend—PagerDuty, Prometheus, Loki, Redis Streams, or Kafka.",
    code: `createDspPipeline().pipeline({ onLogBatch: router.routeBatch }).convolution({ kernel, mode: "batch" });`,
  },
  {
    icon: Balance,
    title: "Matrix & Wavelet Ops",
    description:
      "Perform complex matrix analysis and wavelet transformations for advanced signal decomposition and feature engineering.",
  },
  {
    icon: HighlightOff,
    title: "Outlier & Drift Detection",
    description:
      "Includes utilities for real-time data quality monitoring, including drift detection and outlier removal.",
  },
  {
    icon: Kafka,
    title: "Kafka Streaming (Experimental)",
    description:
      "Thanks to dspx’s minimal processing latency, Kafka can be used for distributed soft real-time DSP pipelines. Ideal for high-throughput analytics and multi-service architectures.",
  },
];
