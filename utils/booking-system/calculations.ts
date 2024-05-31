export function calculatePercentageChange(
  previousMonthBookings: number,
  currentMonthBookings: number,
): number {
  const percentageChange =
    ((currentMonthBookings - previousMonthBookings) / previousMonthBookings) *
    100;
  return Math.round(percentageChange);
}
