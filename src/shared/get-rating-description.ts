export default function getRatingDescription(rating: number): string {
  if (rating > 8) {
    return 'Very good';
  } else if (rating > 6) {
    return 'Good';
  }
  return 'Mediocre';
}
