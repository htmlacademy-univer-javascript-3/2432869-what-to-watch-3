export default function formatFilmTime(minutes: number): string {
  const hour = Math.floor(minutes / 60);
  return `${hour}:${minutes - 60 * hour}`;
}
