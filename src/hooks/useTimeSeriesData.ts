import { useState, useEffect } from "react";

interface TimeSeriesData {
  DateTime: string;
  ENTSOE_DE_DAM_Price: string;
  ENTSOE_GR_DAM_Price: string;
  ENTSOE_FR_DAM_Price: string;
}

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

const useTimeSeriesData = () => {
  const [data, setData] = useState<TimeSeriesData[]>([]);
  const [filteredData, setFilteredData] = useState<TimeSeriesData[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    fetch("/src/assets/timeseries.json")
      .then((res) => res.json())
      .then((json) => {
        const formattedData = json.map((item: TimeSeriesData) => ({
          ...item,
          DateTime: formatDateTime(item.DateTime),
        }));
        setData(formattedData);
        setFilteredData(formattedData);
      });
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = data.filter((item) => {
        const itemDate = new Date(
          item.DateTime.split(" ")[0].split("-").reverse().join("-")
        );
        const start = new Date(startDate);
        const end = new Date(endDate);
        return itemDate >= start && itemDate <= end;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [startDate, endDate, data]);

  return { filteredData, startDate, endDate, setStartDate, setEndDate };
};

export default useTimeSeriesData;
