type DateObj = {
  years: string;
  months: string;
  days: string;
};

type NumericDateObj = {
  years: number;
  months: number;
  days: number;
};

export function convertStringsToNumbers(obj: DateObj): NumericDateObj {
  return {
    years: Number(obj.years),
    months: Number(obj.months),
    days: Number(obj.days),
  };
}
