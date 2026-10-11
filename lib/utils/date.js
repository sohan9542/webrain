/**
 * Format an ISO date string for blog cards and post metadata.
 * @param {string | Date | null | undefined} isoDate
 * @returns {string} Human-readable date like "11 Oct, 2026", or an empty string when invalid.
 */
export function formatDate(isoDate) {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

/** @deprecated Prefer {@link formatDate}. Kept for existing call sites during migration. */
export const format__date = formatDate;
