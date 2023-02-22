const MockJS = require("mockjs");

const res = MockJS.mock({
  "data|10-16": [
    {
      "id|+1": 1,
    },
  ],
});

console.log(res);
