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

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <TabsChartData
          Chart={<ChartLine data={chartData} />}
          Table={<TableLine data={chartData} />}
        />
        <ChartBar />
        <ChartArea />
        <ChartPie />
      </div>
    </div>
  );
}
