type InfoInputProps = {
  id: string;
  label: string;
  value: string;
  handleChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InfoInput = ({ id, label, value, handleChange }: InfoInputProps) => {
  let placeholderText = "";

  if (id === "year") {
    placeholderText = "YYYY";
  } else if (id === "month") {
    placeholderText = "MM";
  } else {
    placeholderText = "DD";
  }

  return (
    <div className="max-w-[87px]">
      <label
        htmlFor={id}
        className="text-xs uppercase font-bold tracking-[4px] text-[#716F6F]"
      >
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={value}
        placeholder={placeholderText}
        className="w-[100%] border border-gray-200 rounded-lg text-xl font-bold  mt-2  px-4 py-2 outline-none cursor-pointer no-spinner"
        maxLength={id === "year" ? 4 : 2}
        onChange={(e) => handleChange(id, e)}
      />
    </div>
  );
};

export default InfoInput;
