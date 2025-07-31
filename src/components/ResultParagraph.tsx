const ResultParagraph = ({
  result,
  children,
}: {
  result: string;
  children: string;
}) => {
  return (
    <p
      className="
          font-extrabold italic text-[3.5rem] tracking-[-0.125rem] leading-[110%] 
          max-[355px]:text-5xl sm:text-[6.5rem]
                "
    >
      <span className="text-purple-500">
        {result === "" || result === undefined || result === null
          ? "--"
          : result}
      </span>
      {children}
    </p>
  );
};

export default ResultParagraph;
