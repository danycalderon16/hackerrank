"use strict";
function getTotalExecutionTime(n, logs) {
    const res = Array(n).fill(0);
    const stackWait = [];
    let currentTime = 0;
    for (let i = 0; i < logs.length; i++) {
        const [idStr, type, timeStr] = logs[i].split(":");
        const id = parseInt(idStr);
        const timestamp = parseInt(timeStr);
        if (type === "start") {
            if (stackWait.length > 0) {
                res[stackWait[stackWait.length - 1]] += timestamp - currentTime;
            }
            stackWait.push(id);
            currentTime = timestamp;
        }
        else {
            res[stackWait.pop()] += timestamp - currentTime + 1;
            currentTime = timestamp + 1;
        }
    }
    return res;
}
console.log(getTotalExecutionTime(3, [
    "0:start:0",
    "2:start:4",
    "2:end:5",
    "1:start:7",
    "1:end:10",
    "0:end:11"
]));
