function getTotalExecutionTime(n, logs) {
  const exclusiveTimes = new Array(n).fill(0);
  const stack = [];
  let prevTimestamp = 0;

  logs.forEach(log => {
    const [idStr, type, timestampStr] = log.split(":");
    const id = parseInt(idStr);
    const timestamp = parseInt(timestampStr);

    if (type === "start") {
      if (stack.length > 0) {
        const prevId = stack[stack.length - 1];
        exclusiveTimes[prevId] += timestamp - prevTimestamp;
      }
      stack.push(id);
      prevTimestamp = timestamp;
    } else {
      const currentId = stack.pop();
      exclusiveTimes[currentId] += timestamp - prevTimestamp + 1;
      prevTimestamp = timestamp + 1;
    }
  });

  return exclusiveTimes;
}



console.log(getTotalExecutionTime(3, [
  "0:start:0",
  "1:start:2",
  "2:start:3",
  "2:end:4",
  "1:end:5",
  "0:end:6"
]));

const logs = [
  "0:start:0",
  "1:start:2",
  "2:start:3",
  "2:end:4",
  "1:end:5",
  "0:end:6"
];

