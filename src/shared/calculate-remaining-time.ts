import formatToTwoDigitString from './format-to-two-digit-string';

export default function calculateRemainingTime(totalSeconds: number, currentSeconds: number): string {
  let seconds = totalSeconds - currentSeconds;

  let minutes = Math.floor(seconds / 60);
  seconds = seconds - 60 * minutes;
  const hours = Math.floor(minutes / 60);
  minutes = minutes - 60 * hours;

  const firstPart = `-${hours ? `${formatToTwoDigitString(hours)}:` : ''}`;
  const secondPart = `${formatToTwoDigitString(minutes)}:${formatToTwoDigitString(seconds)}`;
  return `${firstPart}${secondPart}`;
}
