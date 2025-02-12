import DataTable from "./components/DataTable";
import Chart from "./components/Chart";
import useTimeSeriesData from "./hooks/useTimeSeriesData";
import DateFilter from "./components/DateFilter";
import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const { filteredData, startDate, endDate, setStartDate, setEndDate } =
    useTimeSeriesData();

  const [visibleSeries, setVisibleSeries] = useState({
    ENTSOE_DE: true,
    ENTSOE_GR: true,
    ENTSOE_FR: true,
  });

  const handleToggleSeries = (dataset: string, isVisible: boolean) => {
    setVisibleSeries((prev) => ({
      ...prev,
      [dataset]: isVisible,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text mb-6 text-center">
        Time Series Data
      </h1>

      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <Checkbox onToggle={handleToggleSeries} />

      <Chart data={filteredData} visibleSeries={visibleSeries} />
      <DataTable data={filteredData} visibleSeries={visibleSeries} />
    </div>
  );
}

export default App;
