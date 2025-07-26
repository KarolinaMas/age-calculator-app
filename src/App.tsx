import { useState } from "react";
import { intervalToDuration } from "date-fns";
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
    } else if (id === "day") {
      setBirthDate((prev) => ({ ...prev, days: e.target.value }));
    }
  };

  const calculateAge = (): void => {
    const { years, months, days } = birthDate;
    const birthYear = Number(years);
    const birthMonth = Number(months) - 1;
    const birthDay = Number(days);

    const groundDate = new Date(birthYear, birthMonth, birthDay);
    if (isNaN(groundDate.getTime())) {
      alert("Invalid birth date.");
      return;
    }

    const today = new Date();
    const duration = intervalToDuration({ start: groundDate, end: today });

    if (duration) {
      setResult({
        years: String(duration.years ?? 0),
        months: String(duration.months ?? 0),
        days: String(duration.days ?? 0),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateAge();
  };

  return (
    <div className="bg-white max-w-[343px] mx-auto px-6 py-12 rounded-3xl rounded-br-[100px]  max-[360px]:mx-2.5">
      <form
        className="relative border-b border-b-gray-200 pb-16 mb-16"
        onSubmit={(e) => handleSubmit(e)}
      >
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
        <button
          className="absolute mt-8 left-[50%] translate-x-[-50%] bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full"
          type="submit"
        >
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
