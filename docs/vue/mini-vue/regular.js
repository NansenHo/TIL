// 模拟一个正则表达式 /ab[cd]/.test() 来理解有限状态机
function test(string) {
  let i;
  let startIndex;
  let endIndex;
  const result = [];

  function waitForA(char) {
    if (char === "a") {
      startIndex = i;
      return waitForB;
    }
    return waitForA;
  }

  function waitForB(char) {
    if (char === "b") {
      return waitForC;
    }
    return waitForB;
  }

  function waitForC(char) {
    if (char === "c" || char === "d") {
      endIndex = i;
      return end;
    }
    return waitForA;
  }

  function end() {
    return end;
  }

  let currentState = waitForA;

  for (i = 0; i < string.length; i++) {
    let nextState = currentState(string[i]);
    currentState = nextState;

    if (currentState === end) {
      console.log(startIndex, endIndex);
      result.push({
        start: startIndex,
        end: endIndex,
      });

      currentState = waitForA;
      // return true;
    }
  }

  return false;
}

console.log(test("abc/abd"));
