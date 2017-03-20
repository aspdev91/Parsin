const operators = {
  '+': function (a, b) {
    return a + b;
  },
  '-': function (a, b) {
    if (typeof b === 'undefined') return -a;
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '/': function (a, b) {
    return a / b;
  },
  '%': function (a, b) {
    return a % b;
  },
  '^': function (a, b) {
    return Math.pow(a, b);
  },
};

const variables = {
  pi: Math.PI,
  e: Math.E
};

const functions = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.cos,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  abs: Math.abs,
  round: Math.round,
  ceil: Math.ceil,
  floor: Math.floor,
  log: Math.log,
  exp: Math.exp,
  sqrt: Math.sqrt,
  max: Math.max,
  min: Math.min,
  random: Math.random,
};

const args = {};
