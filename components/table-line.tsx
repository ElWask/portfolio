import { ChartData, DonutData } from "@/app/page";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableLineProps {
  data: ChartData[] | DonutData[];
}

export function TableLine({ data }: TableLineProps) {
  const heads = Object.keys(data[0]);
  const rows = data.map((row: any) => Object.values(row));

  return (
    <div className="md:h-56 h-80 w-full overflow-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead key={-1}></TableHead>
            {heads.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell key={-1}></TableCell>
              {row.map((cell: string, cellIndex: number) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell key={-1}>Total</TableCell>
            {heads.map((head, index) => (
              <TableCell key={index}>{getTotal(data, head)}</TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

function getTotal(data: any, key: string) {
  return data.reduce(
    (acc: number, item: any) =>
      typeof item[key] === "number" ? acc + item[key] : "-",
    0
  );
}

export default TableLine;
