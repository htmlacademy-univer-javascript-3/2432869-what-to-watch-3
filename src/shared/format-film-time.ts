export default function formatFilmTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes - 60 * hours;
  const hoursPart = hours > 0 ? `${hours}h` : '';
  const minutesPart = `${minutes > 9 ? minutes : `0${minutes}`}m`;
  return `${hoursPart} ${minutesPart}`;
}
