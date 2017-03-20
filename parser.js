Array.prototype.peek = function() {
  if(this.length !== 0 ){
    return this[this.length - 1];
  }
  return null;
}

function Parse() {
  this.infixToPostFix = function (tokens) {
    let outputQueue = [];
    let operatorStack = [];
    let operators = {
      '^': {
        precedence: 4,
        associativity: 'Right',
      },
      '/': {
        precedence: 3,
        associativity: 'Left',
      },
      '*': {
        precedence: 3,
        associativity: 'Left',
      },
      '+': {
        precedence: 2,
        associativity: 'Left',
      },
      '-': {
        precedence: 2,
        associativity: 'Left',
      }
    };
  };
  let token_keys = tokens.keys;
  for(let i = 0; i < token_keys.lenght; i++ {
    let token = token_keys[i];
    if(token_keys[i] === 'number') {
      outputQueue.push(token);
    } else if (token_keys[i] === "operator") {
      if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while(operatorStack[operatorStack.length - 1] !== "(") {
          outputQueue.push(operatorStack.pop()); // pop out all operators until front parens
        }
        operatorStack.pop() // remove front parens
      } else {
        let o1 = token;
        let o2 = operatorStack.peek();
        while("^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
          outputQueue.push(operatorStack.pop());
          o2 = operatorStack.peek();
        }
        operatorStack.push(o1);
      }
    }
  }
  while(operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop()); // 
  }
  return outputQueue.join(" ");
}

module.exports = new Parse;
