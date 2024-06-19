const f = require("fs");
const { resourceLimits } = require("worker_threads");
f.writeFile("./test.txt", "Hello world", (err) => { });
console.log("1");
f.readFile("test.txt", "utf-8", (err, result) => {
    console.log(result);
});
console.log("2");

