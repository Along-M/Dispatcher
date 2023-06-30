import dateFormat from "dateformat";

export const useFormatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat);
  return dateFormat(date, "dddd mmm d, yyyy");
};
