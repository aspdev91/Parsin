'use strict';

const {
  add,
  minus,
  multiply,
  divide,
  mod,
} = require('./functions');

const TokenStream = require('./token-stream');
const ParserState = require('./parser-state');
const Expression = require('./expression');


function Parser(options) {
  this.options = options || {};
  this.binaryOperators = {
    '+': add,
    '-': minus,
    '*': multiply,
    '/': divide,
    '%': mod,
    '^': Math.pow,
  };
}

Parser.prototype.parse = function (expr) {
  const tokens = [];
  const parserState = new parserState(
    this,
    new TokenStream(this, expr),
    { allowMemberAccess: this.options.allowMemberAccess }
  )
};

Parser.prototype.evaluate = function (expr, variables) {
  return this.parse(expr).evaluate(variables);
};

const sharedParser = new Parser();

Parser.parse = function (expr) {
  return sharedParser.parse(expr);
};

Parser.evaluate = function (expr, variables) {
  return sharedParser.parse(expr).evaluate(variables);
};

module.exports = Parser;
