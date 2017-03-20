const lex = require('./lexer');
const parse = require('./parser');
// const evaluate = require('./evaluator');

const calculate = function (expr) {
  try {
    const tokens = lex(expr);
    const parsedExp = parse.infixToPostFix(tokens);
    return parsedExp;
    // const output = evaluate(parseTree);
    // return output;
  } catch (e) {
    return e;
  }
};

module.exports = calculate;
