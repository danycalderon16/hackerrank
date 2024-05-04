function timeConversion(s) {
  const split = s.split(":");
  const meridian = split[2].substring(2);

  let hour =
    split[0] === "12"
      ? meridian == "AM"
        ? "00"
        : "12"
      : meridian == "PM"
      ? parseInt(split[0]) + 12
      : split[0];

  return `${hour}:${split[1]}:${split[2].substring(0, 2)}`;
}
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("12:05:44AM"));
