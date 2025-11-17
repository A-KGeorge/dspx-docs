import { pivotData } from "./helper";
import {
  Bolt,
  DeveloperBoard,
  ShowChart,
  Layers,
  HighlightOff,
  Balance,
} from "@mui/icons-material";
// Raw performance data for charts in nanoseconds
const rawFftData = {
  dspx: {
    "1024": 89354275.74175788,
    "65536": 201630618.71211654,
    "1048576": 118664848.44026712,
  },
  "tf.js": {
    "1024": 4561044.0514898375,
    "65536": 12219821.03600719,
    "1048576": 13166539.949735962,
  },
  "fft.js": {
    "1024": 5131803.147238458,
    "65536": 103123475.63374309,
    "1048576": 48334950.5276815,
  },
};

const rawFirData = {
  dspx: {
    "1024": 12676405.050747328,
    "65536": 40266163.66730622,
    "1048576": 50975736.62743485,
  },
  fili: {
    "1024": 4174650.413795529,
    "65536": 9500972.771107329,
    "1048576": 10321004.76877556,
  },
  naive_js: {
    "1024": 12094012.046775518,
    "65536": 13025504.038669478,
    "1048576": 13578487.226593312,
  },
};

const rawConvolutionData = {
  dspx: {
    "8": 140629157.54687858,
    "32": 75651340.77504273,
    "64": 38345327.950380415,
    "128": 35248621.75608493,
    "256": 42680560.0781466,
  },
  "tf.js": {
    "8": 14027157.069228249,
    "32": 13955588.112537121,
    "64": 13389805.229166793,
    "128": 13631749.729594545,
    "256": 13104500.472902365,
  },
  naive_js: {
    "8": 104409890.39004391,
    "32": 24941581.226831965,
    "64": 12698880.205860635,
    "128": 7233186.83598856,
    "256": 4147191.900015734,
  },
};

const rawMovingAverageData = {
  dspx: {
    "32": 84058231.2576155,
    "128": 91753703.13331296,
    "512": 86070762.52265555,
    "2048": 88281807.77261615,
    "8192": 82232483.43705952,
  },
  naive_js: {
    "32": 33493468.528323434,
    "128": 9593853.937321393,
    "512": 2694519.6850911686,
    "2048": 642497.5838694833,
    "8192": 188545.77511428224,
  },
};

const fftChartData = pivotData(rawFftData);
const firChartData = pivotData(rawFirData);
const convolutionChartData = pivotData(rawConvolutionData);
const movingAverageChartData = pivotData(rawMovingAverageData);

export const slides = [
  {
    id: "fft",
    title: "FFT Throughput",
    XLabel: "Input Size",
    data: fftChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "tf.js", color: "#f97316" },
      { key: "fft.js", color: "#ef4444" },
    ],
  },
  {
    id: "fir",
    title: "FIR Throughput",
    XLabel: "Input Size",
    data: firChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "naive_js", color: "#ef4444" },
      { key: "fili", color: "#f97316" },
    ],
  },
  {
    id: "conv",
    title: "Convolution Throughput (Input size = 65536 samples)",
    XLabel: "Kernel Size",
    data: convolutionChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "tf.js", color: "#f97316" },
      { key: "naive_js", color: "#ef4444" },
    ],
  },
  {
    id: "ma",
    title: "Moving Average (Input size = 65536 samples)",
    XLabel: "Window Size",
    data: movingAverageChartData,
    lines: [
      { key: "dspx", color: "#25c2a0" },
      { key: "naive_js", color: "#ef4444" },
    ],
  },
];

// Features data

export const featuresList = [
  {
    icon: Bolt,
    title: "Native Performance",
    description:
      "Core operations are written in C++ and optimized with SIMD (NEON on ARM) for blazing-fast execution, far exceeding native JS libraries.",
  },
  {
    icon: DeveloperBoard,
    title: "Advanced DSP Toolkit",
    description:
      "Includes FFT, FIR/IIR filters, convolution, resampling, STFT, and adaptive filters (LMS/RLS) right out of the box.",
  },
  {
    icon: Layers,
    title: "Modern Pipeline API",
    description:
      "Chain multiple processing stages together with a simple, fluent API. `pipeline.addStage(filter).addStage(fft).process(data)`",
  },
  {
    icon: ShowChart,
    title: "Time-Series Analysis",
    description:
      "Built-in support for real-time feature extraction like Moving Average, RMS, Variance, Z-Score, and more.",
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
];
