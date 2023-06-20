
export default function isPublished(date, hours, min) {
  // Create a Date object from the date string
  const publishDate = new Date(date);

  // Set the hours and minutes of the publishDate
  publishDate.setHours(hours);
  publishDate.setMinutes(min);

  // Get the current time
  const now = new Date();

  // Return true if the current time is after the publishDate, false otherwise
  return now > publishDate;
}
