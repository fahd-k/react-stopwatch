export function formattedTime(passedTimeInMilliseconds) {
  const totalSeconds = passedTimeInMilliseconds / 1000;
  const [minutes, seconds, centiseconds] = [
    totalSeconds / 60,
    totalSeconds % 60,
    (passedTimeInMilliseconds % 1000) / 10,
  ].map((total) => Math.floor(total).toString().padStart(2, '0'));

  return `${minutes} : ${seconds} . ${centiseconds}`;
}