import { useEffect, useState } from "react";
import arrowIcon from "./assets/arrow-icon.svg";
import InfoInput from "./components/InfoInput";
import ResultParagraph from "./components/ResultParagraph";

const App = () => {
  const [result, setResult] = useState({
    years: "",
    months: "",
    days: "",
  });

  const [birthDate, setBirthDate] = useState({
    years: "",
    months: "",
    days: "",
  });

  const handleInputChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (id === "year") {
      setBirthDate((prev) => ({ ...prev, years: e.target.value }));
    } else if (id === "month") {
      setBirthDate((prev) => ({ ...prev, months: e.target.value }));
    } else {
      setBirthDate((prev) => ({ ...prev, days: e.target.value }));
    }
  };

  useEffect(() => {
    console.log(birthDate);
  }, [birthDate]);

  return (
    <div className="bg-white max-w-[343px] mx-auto px-6 py-12 rounded-3xl rounded-br-[100px]">
      <form className="relative border-b border-b-gray-200 pb-16 mb-16">
        <div className="flex flex-wrap justify-between">
          <InfoInput
            id={"day"}
            label={"day"}
            value={birthDate.days}
            handleChange={handleInputChange}
          />
          <InfoInput
            id={"month"}
            label={"month"}
            value={birthDate.months}
            handleChange={handleInputChange}
          />
          <InfoInput
            id={"year"}
            label={"year"}
            value={birthDate.years}
            handleChange={handleInputChange}
          />
        </div>
        <button className="absolute mt-8 left-[50%] translate-x-[-50%] bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full">
          <img src={arrowIcon} />
        </button>
      </form>
      <div>
        <ResultParagraph result={result.years}> years</ResultParagraph>
        <ResultParagraph result={result.months}> months</ResultParagraph>
        <ResultParagraph result={result.days}> days</ResultParagraph>
      </div>
    </div>
  );
};

export default App;
