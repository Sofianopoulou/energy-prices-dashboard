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

const DataTable = ({ data }: { data: TimeSeriesData[] }) => {
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
    <div className="overflow-x-auto mt-6">
      <table className="border-collapse border w-full">
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
