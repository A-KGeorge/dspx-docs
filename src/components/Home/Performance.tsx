import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import LinePerformanceChart from "./LinePerformanceChart";
import { slides } from "./data";

export default function Performance() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // --- WCAG: Keyboard navigation support ----
  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    node.addEventListener("keydown", handleKey);
    return () => node.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="performance"
      className="py-20 bg-gray-900"
      aria-label="Performance benchmark carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Unmatched Performance
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          `dspx` is orders of magnitude faster than other JS libraries.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Benchmarks from Intel i5 12600T (Higher is better)
        </p>
      </div>

      {/* CAROUSEL ROOT WITH KEYBOARD FOCUS */}
      <div
        ref={carouselRef}
        tabIndex={0}
        className="mt-16 outline-none"
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {/* Slide container with centered card + arrows */}
        <div className="flex items-center justify-center gap-4">
          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="
              bg-gray-800/80 hover:bg-gray-700
              text-white px-3 py-2 rounded-full
              border border-gray-600
              focus-visible:outline 
              focus-visible:outline-cyan-300
            "
          >
            <ChevronLeft />
          </button>

          {/* The actual graph card */}
          <div className="w-full max-w-5xl">
            <LinePerformanceChart
              key={slides[index].id}
              data={slides[index].data}
              title={slides[index].title}
              XLabel={slides[index].XLabel}
              lines={slides[index].lines}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="
              bg-gray-800/80 hover:bg-gray-700
              text-white px-3 py-2 rounded-full
              border border-gray-600
              focus-visible:outline 
              focus-visible:outline-cyan-300
            "
          >
            <ChevronRight />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              aria-current={index === i ? "true" : "false"}
              className={`
                h-3 w-3 rounded-full
                ${i === index ? "bg-cyan-400" : "bg-gray-600"}
                focus-visible:outline  focus-visible:outline-cyan-300
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
