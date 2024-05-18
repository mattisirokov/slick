// calculate the percentage change between previous months bookings and the current months bookings

export function calculatePercentageChange(
  previousMonthBookings: number,
  currentMonthBookings: number,
): number {
  return (
    ((currentMonthBookings - previousMonthBookings) / previousMonthBookings) *
    100
  );
}
