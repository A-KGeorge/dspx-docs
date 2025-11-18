import { Card } from "@mui/material";
import { ChevronLeft, ChevronRight, Launch } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PerformanceChart from "./PerformanceChart";
import { slides } from "./data";

export default function Performance() {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  interface CustomDotProps {
    onClick?: () => void;
    active?: boolean;
    index?: number;
  }

  const CustomDot = ({ onClick, active, index }: CustomDotProps) => {
    return (
      <button
        aria-label={`Go to slide ${index + 1}`}
        onClick={onClick}
        className={`
        w-3 h-3 rounded-full mx-1 transition-all
        ${
          active
            ? "bg-cyan-400 scale-110 shadow-md shadow-cyan-500/50"
            : "bg-gray-600"
        }
        focus:outline-none focus:ring-2 focus:ring-cyan-300
      `}
      />
    );
  };

  return (
    <section id="performance" className="py-20 bg-[#111827]">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-white">
          Unmatched Performance
        </h2>
        <p className="mt-2 text-gray-300">
          dspx is orders of magnitude faster than other JS libraries.
        </p>
        <p className="mt-1 text-gray-400 text-sm">
          Benchmarks from Intel i5-12600T (Higher is better)
          <a
            className="no-underline! text-gray-400! hover:text-cyan-400! cursor-pointer"
            href="https://github.com/A-KGeorge/dspx-benchmark/tree/main/charts/12th-gen-intel-core-i5-12600t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Launch className="ml-1" fontSize="inherit" />
          </a>
        </p>
      </div>

      <div className="relative mt-12 max-w-4xl mx-auto px-4 overflow-visible">
        <Carousel
          customDot={<CustomDot />}
          responsive={responsive}
          infinite
          swipeable
          draggable
          customLeftArrow={
            <button
              aria-label="Previous slide"
              className="
          hidden lg:flex
          absolute left-0 top-1/2 -translate-y-1/2
          bg-gray-800/70 border border-gray-600
          p-2 rounded-full cursor-pointer 
          hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-cyan-400
          z-20           
        "
            >
              <ChevronLeft className="text-white" />
            </button>
          }
          customRightArrow={
            <button
              aria-label="Next slide"
              className="
          hidden lg:flex
          absolute right-0 top-1/2 -translate-y-1/2
          bg-gray-800/70 border border-gray-600
          p-2 rounded-full cursor-pointer 
          hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-cyan-400
          z-20
        "
            >
              <ChevronRight className="text-white" />
            </button>
          }
          renderButtonGroupOutside // ENABLE external positioning
          showDots
          transitionDuration={400}
        >
          {slides.map((slide) => (
            <Card
              key={slide.id}
              elevation={0}
              square
              variant="outlined"
              sx={{
                backgroundColor: "#0f172a !important",
                border: "none",
                boxShadow: "none !important",
              }}
              className="px-3 py-6 rounded-2xl mx-auto"
            >
              <PerformanceChart
                variant={slide.variant as "area" | "bar"}
                units={slide.units}
                data={slide.data}
                title={slide.title}
                XLabel={slide.XLabel}
                YLabel={slide.YLabel}
                lines={slide.lines}
              />
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
