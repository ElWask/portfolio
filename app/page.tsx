import { ChartArea } from "@/components/chart-area";
import { ChartBar } from "@/components/chart-bar";
import { ChartLine } from "@/components/chart-line";
import { ChartPie } from "@/components/chart-pie";
import TableLine from "@/components/table-line";
import { TabsChartData } from "@/components/tabs-chart-data";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export type DonutData = {
  browser: string;
  visitors: number;
  fill: string;
};

const donutData: DonutData[] = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <TabsChartData
          Title="Line Chart - Multiple"
          Desc="January - June 2024"
          Chart={<ChartLine data={chartData} />}
          Table={<TableLine data={chartData} />}
        />
        <TabsChartData
          Title="Bar Chart - Stacked"
          Desc="January - June 2024"
          Chart={<ChartBar data={chartData} />}
          Table={<TableLine data={chartData} />}
        />
        <ChartArea />
        <TabsChartData
          Title="Pie Chart - Donut with Legend"
          Desc="January - June 2024"
          Chart={<ChartPie data={donutData} />}
          Table={<TableLine data={donutData} />}
        />
      </div>
    </div>
  );
}
