import { useState, useEffect } from "react";
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

const Chart = () => {
  const [data, setData] = useState<TimeSeriesData[]>([]);

  useEffect(() => {
    fetch("/src/assets/timeseries.json")
      .then((res) => res.json())
      .then((json) => setData(json));
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

  const chartData = {
    labels: data.map((item) => formatDateTime(item.DateTime)),
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
