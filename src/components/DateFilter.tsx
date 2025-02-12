interface DateFilterProps {
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const DateFilter = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DateFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 p-6 bg-white rounded-lg">
      <div className="flex flex-col items-center md:items-start gap-2">
        <label
          htmlFor="start-date"
          className="text-xl font-semibold text-gray-00"
        >
          Start Date:
        </label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-3 w-60 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
        />
      </div>

      <div className="flex flex-col items-center md:items-start gap-2">
        <label
          htmlFor="end-date"
          className="text-xl font-semibold text-gray-700"
        >
          End Date:
        </label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-3 w-60 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
        />
      </div>

      <p className="text-center text-sm text-gray-600 mt-4 max-w-xs mx-auto">
        Select the date range to filter the time series data. The chart and
        table below will update based on your selection.
      </p>

      {startDate && endDate && (
        <p className="text-sm text-center mt-2 text-gray-600">
          Filtering data from <span className="font-medium">{startDate}</span>{" "}
          to <span className="font-medium">{endDate}</span>
        </p>
      )}
    </div>
  );
};

export default DateFilter;
