export const isValidDay = (month: number, day: number): boolean => {
  if (day <= 0 || month <= 0 || month > 12) return false;
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
};
