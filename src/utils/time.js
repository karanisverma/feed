export const getTimePassed = (timeStamp) => {
  const currentTimeStamp = Date.now();
  const timeDelta = currentTimeStamp - timeStamp;
  return msToTime(timeDelta, timeStamp);
};

function msToTime(duration, timeStamp) {
  let minutes = Math.floor(duration / 1000 / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  if (days === 1) return `Yesterday at ${formatAMPM(new Date(timeStamp))}`;
  if (days > 2)
    return `${formatDate(new Date(timeStamp))} at ${formatAMPM(
      new Date(timeStamp)
    )}`;

  if (hours) return `${hours}h ${minutes}m`;
  if (minutes) return `${minutes}m`;
  return "now";
}

// ASK: which type of time stamp would be show for post older than 24hrs?
function formatDate(date) {
  const month = date.toLocaleString("default", { month: "long" });
  return `${date.getDate()} ${month}`;
}
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
