import { ReactNode } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { numberFormatter, stringNumberFormatter } from "./helper";

type PerformanceChartProps = {
  data: Array<Record<string, number | string>>;
  title: string;
  lines: Array<{ key: string; color: string }>;
  XLabel: string;
  YLabel: string;
  variant: "area" | "bar";
  units: string;
};

const PerformanceChart = ({
  data,
  title,
  lines,
  XLabel,
  YLabel,
  variant,
  units,
}: PerformanceChartProps) => {
  const chartMap: Record<string, () => ReactNode> = {
    area: () => (
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
            value: YLabel,
            angle: -90,
            position: "insideLeft",
            fill: "#9ca3af",
            dx: -25,
          }}
          domain={["auto", "auto"]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#d1d5db" }}
          formatter={(value: any, name: any) => {
            const formatSingle = (v: number | string) =>
              typeof v === "number"
                ? numberFormatter(v) + " " + units
                : stringNumberFormatter(v);
            if (Array.isArray(value)) {
              return [
                (value as Array<number | string>).map(formatSingle).join(", "),
                name,
              ];
            }
            return [formatSingle(value as number | string), name];
          }}
          labelFormatter={(label) => `Size: ${label}`}
        />
        <Legend wrapperStyle={{ color: "#9ca3af", paddingTop: "10px" }} />
        {lines.map((line) => (
          <Area
            key={line.key}
            type="monotone"
            dataKey={line.key}
            stroke={line.color}
            strokeWidth={2}
            fillOpacity={1}
            fill={`url(#color-${line.key.replace(/[^a-zA-Z0-9]/g, "")})`}
            activeDot={{ r: 6 }}
          />
        ))}
      </AreaChart>
    ),
    bar: () => (
      <BarChart
        data={data}
        margin={{ top: 5, right: 20, left: 30, bottom: 20 }}
      >
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
            value: YLabel,
            angle: -90,
            position: "insideLeft",
            fill: "#9ca3af",
            dx: -25,
          }}
          domain={["auto", "auto"]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#d1d5db" }}
          formatter={(value: any, name: any) => {
            const formatSingle = (v: number | string) =>
              typeof v === "number"
                ? numberFormatter(v) + " " + units
                : stringNumberFormatter(v);
            if (Array.isArray(value)) {
              return [
                (value as Array<number | string>).map(formatSingle).join(", "),
                name,
              ];
            }
            return [formatSingle(value as number | string), name];
          }}
          cursor={false}
          labelFormatter={(label) => `Size: ${label}`}
        />
        <Legend wrapperStyle={{ color: "#9ca3af", paddingTop: "10px" }} />
        {lines.map((line) => (
          <Bar key={line.key} dataKey={line.key} fill={line.color} />
        ))}
      </BarChart>
    ),
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg h-96 w-full mx-auto">
      <h3 className="text-lg font-semibold text-white! mb-4 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        {chartMap[variant]?.()}
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
