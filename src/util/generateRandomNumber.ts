/**
 * @param from the start of the range
 * @param to the end of the range
 * @returns A random number (positive or negative) between from and to
 */
export default function generateRandomNumber(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
