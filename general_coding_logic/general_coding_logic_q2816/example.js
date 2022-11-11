
const checkParenthesis = (input) => {
  let count = 0;

  for (let c of input) {
    if (c === '(') {
      count++;
    }

    else if (c === ')') {
      count--;
    }

    else {
      console.log("No ( or ) found");
      return
    }
  }
  if (count > 0) {
    console.log(count + " open parenthesis not closed");
  }
  else if (count < 0) {
    console.log(Math.abs(count) + " closed parenthesis are loose");
  }
  else {
    console.log("All parenthesis closed");
  }
}


const input = prompt()
checkParenthesis(input)
