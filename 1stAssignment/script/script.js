"use strict";

const task1 = (num1, num2) =>
  `Tam hissə: ${Math.floor(num1 / num2)}, Qalıq hissə: ${num1 % num2}`;

const task2 = (num1, num2) => {
  let greater = num1 > num2 ? num1 : num2;
  while (!(greater % num1 === 0 && greater % num2 === 0)) {
    greater++;
  }
  return greater;
};

const task3 = (num1, num2) => {
  let smaller = num1 < num2 ? num1 : num2;
  for (let i = smaller; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    } else continue;
  }
};

const task4 = (step, limit) => {
  const arr = [];
  for (let i = 1; i < limit; i += step) {
    arr.push(i);
  }
  return arr;
};

const task5 = (number) => {
  if (Math.floor(number) < number) {
    return `Bravo Enşteyn! Yalnız tam ədədlər.`;
  } else {
    if (number === 1) return;
    `Nə sadədir, nə mürəkkəb`;
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) return `Mürəkkəbdir`;
    }
    return `Sadədir`;
  }
};
