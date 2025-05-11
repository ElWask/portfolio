"use client";

import { TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TabsChartData({
  Title,
  Desc,
  Chart,
  Table,
  Footer,
  FooterDesc,
}: {
  Title: String;
  Desc: String;
  Chart: any;
  Table: any;
  Footer: any;
  FooterDesc: any;
}) {
  return (
    <>
      <Card>
        <Tabs defaultValue="chart">
          <CardHeader className="flex flex-row justify-between">
            <>
              <CardTitle>{Title}</CardTitle>
              <CardDescription>{Desc}</CardDescription>
            </>
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>
          </CardHeader>
          <TabsContent className="md:h-60 h-80" value="chart">
            <CardContent>{Chart}</CardContent>
          </TabsContent>
          <TabsContent className="md:h-60 h-80" value="data">
            {Table}
          </TabsContent>
        </Tabs>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                {Footer}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                {FooterDesc}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
