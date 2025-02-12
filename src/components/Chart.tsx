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

interface ChartProps {
  data: TimeSeriesData[];
  visibleSeries: { [key: string]: boolean };
}

const Chart = ({ data, visibleSeries }: ChartProps) => {
  const chartData = {
    labels: data.map((item) => item.DateTime),
    datasets: [
      visibleSeries["ENTSOE_DE"] && {
        label: "ENTSOE DE Price",
        data: data.map((item) => parseFloat(item.ENTSOE_DE_DAM_Price)),
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
      visibleSeries["ENTSOE_GR"] && {
        label: "ENTSOE GR Price",
        data: data.map((item) => parseFloat(item.ENTSOE_GR_DAM_Price)),
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
      visibleSeries["ENTSOE_FR"] && {
        label: "ENTSOE FR Price",
        data: data.map((item) => parseFloat(item.ENTSOE_FR_DAM_Price)),
        borderColor: "red",
        borderWidth: 2,
        fill: false,
      },
    ].filter(
      (
        dataset
      ): dataset is {
        label: string;
        data: number[];
        borderColor: string;
        borderWidth: number;
        fill: boolean;
      } => Boolean(dataset)
    ),
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
