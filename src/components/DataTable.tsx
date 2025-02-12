import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
} from "@tanstack/react-table";

interface TimeSeriesData {
  DateTime: string;
  ENTSOE_DE_DAM_Price: string;
  ENTSOE_GR_DAM_Price: string;
  ENTSOE_FR_DAM_Price: string;
}

interface DataTableProps {
  data: TimeSeriesData[];
  visibleSeries: { [key: string]: boolean };
}

const DataTable = ({ data, visibleSeries }: DataTableProps) => {
  const columns: ColumnDef<TimeSeriesData, any>[] = [
    { accessorKey: "DateTime", header: () => "Timestamp" },
    ...(visibleSeries["ENTSOE_DE"]
      ? [
          {
            accessorKey: "ENTSOE_DE_DAM_Price",
            header: () => "ENTSOE DE Price",
          },
        ]
      : []),
    ...(visibleSeries["ENTSOE_GR"]
      ? [
          {
            accessorKey: "ENTSOE_GR_DAM_Price",
            header: () => "ENTSOE GR Price",
          },
        ]
      : []),
    ...(visibleSeries["ENTSOE_FR"]
      ? [
          {
            accessorKey: "ENTSOE_FR_DAM_Price",
            header: () => "ENTSOE FR Price",
          },
        ]
      : []),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto mt-6">
      <table className="border-collapse border w-full rounded-lg shadow-md">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-r border-gray-500 p-3 text-left font-semibold uppercase"
                >
                  {typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header(header.getContext())
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={`border-b border-gray-300 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-gray-200 transition-colors`}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-3 text-gray-900 border-r border-gray-300"
                >
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
