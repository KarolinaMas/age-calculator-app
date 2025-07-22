const ResultParagraph = ({
  result,
  children,
}: {
  result: string;
  children: string;
}) => {
  return (
    <p className="font-extrabold italic text-[3.5rem] tracking-[-0.125rem] leading-[110%]">
      <span className="text-purple-500">{result === "" ? "--" : result}</span>
      {children}
    </p>
  );
};

export default ResultParagraph;
