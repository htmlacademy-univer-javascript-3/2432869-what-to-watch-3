export default function formatFilmTime(totalMinutes: number): string {
  const hour = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes - 60 * hour;
  return `${hour}:${minutes > 9 ? minutes : `0${minutes}`}`;
}
