import { type ClassValue, clsx } from "clsx";
import moment from "moment-timezone";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateToLocal = (dateStr: string) => {
  const userTimezone = moment.tz.guess();
  const timezone = moment.tz(dateStr, userTimezone);
  return timezone.format("lll");
  // const date = new Date(dateStr);
  // const options: Intl.DateTimeFormatOptions = {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  // };
  // const formatter = new Intl.DateTimeFormat(locale, options);
  // return formatter.format(date);
};