import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TimeSeriesData {
  DateTime: string;
  ENTSOE_DE_DAM_Price: string;
  ENTSOE_GR_DAM_Price: string;
  ENTSOE_FR_DAM_Price: string;
}

const Chart = ({ data }: { data: TimeSeriesData[] }) => {
  const chartData = {
    labels: data.map((item) => item.DateTime),
    datasets: [
      {
        label: "ENTSOE DE Price",
        data: data.map((item) => parseFloat(item.ENTSOE_DE_DAM_Price)),
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "ENTSOE GR Price",
        data: data.map((item) => parseFloat(item.ENTSOE_GR_DAM_Price)),
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "ENTSOE FR Price",
        data: data.map((item) => parseFloat(item.ENTSOE_FR_DAM_Price)),
        borderColor: "red",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
