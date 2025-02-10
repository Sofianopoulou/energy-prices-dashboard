import DataTable from "./components/DataTable";
import Chart from "./components/Chart";
import useTimeSeriesData from "./hooks/useTimeSeriesData";
import DateFilter from "./components/DateFilter";

function App() {
  const { filteredData, startDate, endDate, setStartDate, setEndDate } =
    useTimeSeriesData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Time Series Data</h1>

      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <Chart data={filteredData} />
      <DataTable data={filteredData} />
    </div>
  );
}

export default App;
