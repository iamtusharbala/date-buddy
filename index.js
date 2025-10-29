const timeAgo = (inputDate) => {
  const dateBefore =
    inputDate instanceof Date ? inputDate : new Date(inputDate);
  if (isNaN(dateBefore)) {
    return "Invalid date";
  }
  if (dateBefore > Date.now()) {
    return "please use timeUntil function...";
  }
  const seconds = Math.floor((Date.now() - dateBefore.getTime()) / 1000);
  if (seconds < 5) return "Just now";
  if (seconds < 60) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

  const years = Math.floor(days / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
};

const timeUntil = (inputDate) => {
  const dateAfter =
    inputDate instanceof Date ? inputDate : new Date(inputDate);

  if (isNaN(dateAfter)) {
    return "Invalid date";
  }
  if (dateAfter < Date.now()) {
    return "please use timeAgo function...";
  }

  const seconds = Math.floor((dateAfter.getTime() - Date.now()) / 1000);
  if (seconds < 5) return "Already passed";
  if (seconds < 60) return `in ${seconds} second${seconds > 1 ? "s" : ""}`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `in ${minutes} minute${minutes > 1 ? "s" : ""}`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `in ${hours} hour${hours > 1 ? "s" : ""}`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `in ${days} day${days > 1 ? "s" : ""}`;

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `in ${weeks} week${weeks > 1 ? "s" : ""}`;

  const months = Math.floor(days / 30);
  if (months < 12) return `in ${months} month${months > 1 ? "s" : ""}`;

  const years = Math.floor(days / 365);
  return `in ${years} year${years > 1 ? "s" : ""}`;
};

const formatDate = (inputDate) => {
  const date = inputDate instanceof Date ? inputDate : new Date(inputDate);
  
  if (isNaN(date)) {
    return "Invalid date";
  }
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("en-US", options);
};

const formatDateWithDay = (inputDate) => {
  const date = inputDate instanceof Date ? inputDate : new Date(inputDate);
  if (isNaN(date)) {
    return "Invalid date";
  }
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("en-US", options);
};

module.exports = { timeAgo, timeUntil, formatDate, formatDateWithDay };
