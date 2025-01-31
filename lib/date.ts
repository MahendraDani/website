import dayjs from "dayjs";
export const formatDate = (rawDate: string) => {
  return dayjs(rawDate).format("MMM D, YYYY [at] HH:m a");
};
