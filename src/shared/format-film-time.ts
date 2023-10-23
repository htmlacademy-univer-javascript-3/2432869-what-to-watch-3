export default function FormatFilmTime(minutes: number): string {
  const hour = Math.floor(minutes / 60);
  return `${hour}:${minutes - 60 * hour}`;
}
