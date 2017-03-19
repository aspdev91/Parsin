const isOperator = function isOperator(c) { return /[+\-*\/\^%=(),]/.test(c); };
const isDigit = function isDigit(c) { return /[0-9]/.test(c); };
const isWhiteSpace = function isWhiteSpace(c) { return /\s/.test(c); };
const isIdentifier = function isIdentifier(c) { return typeof c === 'string' && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); };

const tokenize = function (expr) {
  const tokens = [];
  let c;
  let i = 0;

  const advance = function () {
    i += 1;
    c = expr[i];
  };

  const addToken = function (type, value) {
    tokens.push({
      type,
      value,
    });
  };

  while (i < expr.length) {
    c = expr[i];

    if (isWhiteSpace(c)) advance();
    else if (isOperator('operator', c)) {
      addToken('operator', c);
      advance();
    } else if (isDigit(c)) {
      let num = c;
      while (isDigit(advance())) num += c;
      if (c === '.') {
        do num += c; while (isDigit(advance()));
      }
      num = parseFloat(num);
      if (!isFinite(num)) throw new Error("Number's size cannot fit into a 64-bit double.");
      addToken('number', num);
    } else if (isIdentifier(c)) {
      let idn = c;
      while (isIdentifier(advance())) idn += c;
      addToken('identifier', idn);
    }
  }
};

module.exports = tokenize;
