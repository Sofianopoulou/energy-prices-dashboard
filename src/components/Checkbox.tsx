import { useState } from "react";

interface CheckboxControlProps {
  onToggle: (dataset: string, isVisible: boolean) => void;
}

const CheckboxControl = ({ onToggle }: CheckboxControlProps) => {
  const [isENTSOE_DE_VISIBLE, setENTSOE_DE_VISIBLE] = useState(true);
  const [isENTSOE_GR_VISIBLE, setENTSOE_GR_VISIBLE] = useState(true);
  const [isENTSOE_FR_VISIBLE, setENTSOE_FR_VISIBLE] = useState(true);

  const handleCheckboxChange = (dataset: string) => {
    const newState = !(dataset === "ENTSOE_DE"
      ? isENTSOE_DE_VISIBLE
      : dataset === "ENTSOE_GR"
      ? isENTSOE_GR_VISIBLE
      : isENTSOE_FR_VISIBLE);

    if (dataset === "ENTSOE_DE") {
      setENTSOE_DE_VISIBLE(newState);
    } else if (dataset === "ENTSOE_GR") {
      setENTSOE_GR_VISIBLE(newState);
    } else {
      setENTSOE_FR_VISIBLE(newState);
    }

    onToggle(dataset, newState);
  };

  return (
    <div className="mb-4 flex justify-center items-center space-x-6">
      <label className="flex items-center space-x-2 text-blue-600">
        <input
          type="checkbox"
          checked={isENTSOE_DE_VISIBLE}
          onChange={() => handleCheckboxChange("ENTSOE_DE")}
          className="h-5 w-5 text-blue-600 appearance-none border-2 border-blue-600 rounded-sm bg-white checked:bg-blue-600 checked:border-transparent"
        />
        <span>ENTSOE DE Price</span>
      </label>
      <label className="flex items-center space-x-2 text-green-600">
        <input
          type="checkbox"
          checked={isENTSOE_GR_VISIBLE}
          onChange={() => handleCheckboxChange("ENTSOE_GR")}
          className="h-5 w-5 text-green-600 appearance-none border-2 border-green-600 rounded-sm bg-white checked:bg-green-600 checked:border-transparent"
        />
        <span>ENTSOE GR Price</span>
      </label>
      <label className="flex items-center space-x-2 text-red-600">
        <input
          type="checkbox"
          checked={isENTSOE_FR_VISIBLE}
          onChange={() => handleCheckboxChange("ENTSOE_FR")}
          className="h-5 w-5 text-red-600 appearance-none border-2 border-red-600 rounded-sm bg-white checked:bg-red-600 checked:border-transparent"
        />
        <span>ENTSOE FR Price</span>
      </label>
    </div>
  );
};

export default CheckboxControl;
