import { useState } from "react";
import { intervalToDuration } from "date-fns";
import { convertStringsToNumbers } from "./utils.ts";
import arrowIcon from "./assets/arrow-icon.svg";
import InfoInput from "./components/InfoInput";
import ResultParagraph from "./components/ResultParagraph";

type DateInfo = {
  years: string;
  months: string;
  days: string;
};

const App = () => {
  const [result, setResult] = useState<DateInfo>({
    years: "",
    months: "",
    days: "",
  });

  const [birthDate, setBirthDate] = useState<DateInfo>({
    years: "",
    months: "",
    days: "",
  });

  const [errors, setErrors] = useState<DateInfo>({
    years: "",
    months: "",
    days: "",
  });

  const isFormValid = !errors.days && !errors.months && !errors.years;

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

  const validateInputs = (): boolean => {
    const convertedBirthDate = convertStringsToNumbers(birthDate);
    const { years, months, days } = convertedBirthDate;

    let valid = true;
    const errors: DateInfo = {
      years: "",
      months: "",
      days: "",
    };

    const currentYear = new Date().getFullYear();

    if (years > currentYear) {
      errors.years = "Must be in the past";
      valid = false;
    }

    if (months < 1 || months > 12) {
      errors.months = "Must be a valid month";
      valid = false;
    }

    const maxDay = new Date(years, months, 0).getDate();
    if (days < 1 || days > maxDay) {
      errors.days = "Must be a valid day";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const calculateAge = (): void => {
    const convertedBirthDate = convertStringsToNumbers(birthDate);
    const { years, months, days } = convertedBirthDate;

    const birthYear = years;
    const birthMonth = months - 1;
    const birthDay = days;

    const groundDate = new Date(birthYear, birthMonth, birthDay);

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
    const isValid = validateInputs();

    if (isValid) {
      calculateAge();
    }
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
            value={birthDate.days}
            error={errors.days}
            isValid={isFormValid}
            handleChange={handleInputChange}
          />
          <InfoInput
            id={"month"}
            value={birthDate.months}
            error={errors.months}
            isValid={isFormValid}
            handleChange={handleInputChange}
          />
          <InfoInput
            id={"year"}
            value={birthDate.years}
            error={errors.years}
            isValid={isFormValid}
            handleChange={handleInputChange}
          />
        </div>
        <button
          className="
              absolute mt-8 left-[50%] translate-x-[-50%] bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full
              hover:bg-black focus:bg-black cursor-pointer
              transition-colors duration-300 ease-in-out"
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
