import { clsx } from "clsx";

type InfoInputProps = {
  id: string;
  value: string;
  error: string;
  isValid: boolean;
  handleChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InfoInput = ({
  id,
  value,
  error,
  isValid,
  handleChange,
}: InfoInputProps) => {
  let placeholderText = "";

  if (id === "year") {
    placeholderText = "YYYY";
  } else if (id === "month") {
    placeholderText = "MM";
  } else {
    placeholderText = "DD";
  }

  return (
    <div className="max-w-[87px] shrink sm:max-w-[170px]">
      <label
        htmlFor={id}
        className={clsx(
          "text-xs uppercase font-bold tracking-[4px] text-[#716F6F]",
          "sm:text-sm",
          !isValid && "text-red-400"
        )}
      >
        {id}
      </label>
      <input
        type="text"
        maxLength={id === "year" ? 4 : 2}
        id={id}
        value={value}
        placeholder={placeholderText}
        className={clsx(
          "w-full border border-gray-200 rounded-lg text-xl font-bold my-2 px-4 py-2 outline-none cursor-pointer",
          "max-[340px]:text-base sm:text-[32px] sm:px-6",
          !isValid && "border-red-400"
        )}
        onChange={(e) => handleChange(id, e)}
      />
      {error && (
        <p
          className="text-red-400 text-xs italic leading-[150%] sm:text-sm"
          aria-invalid
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InfoInput;
