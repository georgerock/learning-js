// You function takes three arguments that represent the amount of time that
// has passed since midnight, h (Hours) / m (minutes) / s (seconds).
// Your job is to return the amount of milliseconds have passed since midnight.
// h m and s are always positive integers, such that:
// 0 <= m <= 59
// 0 <= s <= 59
// 0 <= h <= 24
// Example:
// h = 0, m = 1, s = 1 -> 61000

export default function numMilli(h, m, s) {
  return h + m + s;
}
