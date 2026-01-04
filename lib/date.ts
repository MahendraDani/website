import dayjs from "dayjs";

export const formatDateAndTime = (rawDate: string) => {
  return dayjs(rawDate).format("MMMM DD, YYYY | hh:mm A");
};
