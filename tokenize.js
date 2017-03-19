const isOperator = function isOperator(c) { return /[+\-*\/\^%=(),]/.test(c); };
const isDigit = function isDigit(c) { return /[0-9]/.test(c); };
const isWhiteSpace = function isWhiteSpace(c) { return /\s/.test(c); };
const isIdentifier = function isIdentifier(c) { return typeof c === 'string' && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); };

const tokenize = function tokenize(expr) {
  const tokens = [];
  let c;
  let i = 0;

  const advance = function () {
    c = expr[i += 1];
  };

  const addToken = function (type, value) {
    tokens.push({
      type,
      value
    });
  };

  while (i < expr.length) {
    c = expr[i];

    if (isWhiteSpace(c)) advance();
    else if (isOperator(c)) {
      addToken(c);
      advance();
    } else if (isDigit(c)) {
      let num = c;
      while()
    }
  }
};