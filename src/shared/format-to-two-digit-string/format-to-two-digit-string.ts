export default function formatToTwoDigitString(num: number) {
  const flooredNum = Math.floor(num);
  return flooredNum > 9 ? `${flooredNum}` : `0${flooredNum}`;
}
