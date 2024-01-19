export const loadFromLocalStorage = (key: string, defaultValue: any) => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    }
  }
  return defaultValue;
};

export const saveToLocalStorage = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, data);
  }
};

export function getCurrentDateTime() {
  const now = new Date();
  // format date and time as YYYY-MM-DDTHH:mm (required by date-time-local input)
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatDateTime(dateTimeString: Date) {
  const date = new Date(dateTimeString);

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const year = date.getFullYear();

  // Ensure that day and month are zero-padded if they are single digits
  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  // Rest of the formatting remains the same
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();

  const formattedDateTime = `${day} ${
    months[month - 1]
  } ${year}, ${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  const dateMonthYear = `${day} ${months[month - 1]} ${year}`;
  const hoursAndMinutes = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return {
    dateMonthYear,
    hoursAndMinutes,
    formattedDateTime,
    formattedDate,
    day,
    month,
    year,
    hours,
    minutes,
    ampm,
  };
}

export function currentTime() {
  const date = new Date();
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();

  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

export function currentMongoTime(dateTimeString: Date) {
  const date = new Date(dateTimeString);

  const ampm = date.getHours() >= 12 ? "pm" : "am";

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();

  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

export function formatDateToInputValue(isoDateString: Date) {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Create the formatted date string
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

  return formattedDate;
}

export function toJavaScriptDate(mongodbTimestamp: any) {
  // Parse the MongoDB timestamp into a JavaScript Date object.
  const date = new Date(mongodbTimestamp);

  return date;
}
