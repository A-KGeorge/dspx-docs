import { Fragment } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LinePerformanceChart = ({ data, title, lines, XLabel }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg h-96 w-full max-w-5xl mx-auto">
    <h3 className="text-lg font-semibold text-white mb-4 text-center">
      {title}
    </h3>
    <ResponsiveContainer width="100%" height="85%">
      <AreaChart
        data={data}
        margin={{ top: 5, right: 20, left: 30, bottom: 20 }}
      >
        <defs>
          {lines.map((line) => (
            <linearGradient
              key={line.key}
              id={`color-${line.key.replace(/[^a-zA-Z0-9]/g, "")}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={line.color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={line.color} stopOpacity={0.1} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis
          dataKey="size"
          stroke="#9ca3af"
          label={{
            value: XLabel,
            position: "insideBottom",
            fill: "#9ca3af",
            dy: 15,
          }}
        />
        <YAxis
          stroke="#9ca3af"
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
          label={{
            value: "(samples/sec)",
            angle: -90,
            position: "insideLeft",
            fill: "#9ca3af",
            dx: -25,
          }}
          domain={["auto", "auto"]}
        />
        <Tooltip
          // These styles are crucial for the dark mode tooltip
          contentStyle={{
            backgroundColor: "#1f2937", // dark background
            border: "1px solid #374151", // gray border
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#fff" }} // white text for label
          itemStyle={{ color: "#d1d5db" }} // light-gray text for items
          formatter={(value, name) => {
            // Corrected formatter syntax
            const formatSingle = (v) =>
              typeof v === "number" || typeof v === "bigint"
                ? new Intl.NumberFormat("en-US").format(v)
                : String(v);
            if (Array.isArray(value)) {
              return [value.map(formatSingle).join(", "), name];
            }
            return [formatSingle(value), name];
          }}
          labelFormatter={(label) => `Size: ${label}`}
        />
        <Legend wrapperStyle={{ color: "#9ca3af", paddingTop: "10px" }} />
        {lines.map((line) => (
          <Fragment key={line.key}>
            <Area
              type="monotone"
              dataKey={line.key}
              stroke={line.color} // Use line color for the stroke
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#color-${line.key.replace(/[^a-zA-Z0-9]/g, "")})`}
              activeDot={{ r: 6 }}
            />
          </Fragment>
        ))}
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default LinePerformanceChart;
