import { useState, useEffect } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
} from "@tanstack/react-table";

interface TimeSeriesData {
  DateTime: string; // ISO format
  ENTSOE_DE_DAM_Price: string;
  ENTSOE_GR_DAM_Price: string;
  ENTSOE_FR_DAM_Price: string;
}

const DataTable = () => {
  const [data, setData] = useState<TimeSeriesData[]>([]);

  useEffect(() => {
    fetch("/src/assets/timeseries.json")
      .then((res) => res.json())
      .then((json) =>
        setData(
          json.map((item: TimeSeriesData) => ({
            ...item,
            DateTime: formatDateTime(item.DateTime),
          }))
        )
      );
  }, []);

  const formatDateTime = (date: string) => {
    const dateObj = new Date(date);
    return `${dateObj.getDate().toString().padStart(2, "0")}-${(
      dateObj.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${dateObj.getFullYear()} ${dateObj
      .getHours()
      .toString()
      .padStart(2, "0")}:${dateObj.getMinutes().toString().padStart(2, "0")}`;
  };

  const columns: ColumnDef<TimeSeriesData, any>[] = [
    { accessorKey: "DateTime", header: "Timestamp" },
    { accessorKey: "ENTSOE_DE_DAM_Price", header: "ENTSOE DE Price" },
    { accessorKey: "ENTSOE_GR_DAM_Price", header: "ENTSOE GR Price" },
    { accessorKey: "ENTSOE_FR_DAM_Price", header: "ENTSOE FR Price" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border w-full mt-6">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2 bg-gray-100">
                  {typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header(header.getContext())
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {cell.getValue() as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
