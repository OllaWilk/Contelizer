export const decodeYearAndMonth = (
  mm: number,
  yy: number
): { year: number; month: number } | null => {
  if (mm >= 1 && mm <= 12) return { year: 1900 + yy, month: mm };
  if (mm >= 21 && mm <= 32) return { year: 2000 + yy, month: mm - 20 };
  if (mm >= 41 && mm <= 52) return { year: 2100 + yy, month: mm - 40 };
  if (mm >= 61 && mm <= 72) return { year: 2200 + yy, month: mm - 60 };
  if (mm >= 81 && mm <= 92) return { year: 1800 + yy, month: mm - 80 };
  return null;
};
