import DataTable from "./components/DataTable";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 justify-center flex">
        Time Series Data
      </h1>
      <Chart />
      <DataTable />
    </div>
  );
}

export default App;
