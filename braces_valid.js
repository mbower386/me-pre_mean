function bracesValid(str) {
  var is_valid = true;
  var stack = [];
  var braces = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  if (str.length % 2 !== 0) {
    is_valid = false;
  }
  else {
    for (let i = 0; i < str.length; i++) {
      if (braces[str[i]]) {
        stack.push(str[i]);
      } else {
        if (str[i] !== braces[stack.pop()]) {
          is_valid = false;
        }
      }
    }
  }

  return is_valid;
}

console.log(bracesValid("{{()}}[]"));

console.log(bracesValid("{(})"));