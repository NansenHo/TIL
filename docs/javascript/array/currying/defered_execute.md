# Curring - Defered Execution

Interview coding test:

```js
add(1)(2)(3) = 6
add(1, 2, 3)(4) = 10
add(1)(2)(3)(4)(5) = 15
```

The answer is not working now.

```js
function add() {
  let args = Array.prototype.slice.call(arguments);

  let execute = function () {
    args.push(...arguments);
    return execute;
  };

  execute.toString = function () {
    return args.reduce(function (prev, cur) {
      return prev + cur;
    });
  };

  return execute;
}

// add(1)(2)(3) === 6;
// add(1, 2, 3)(4) === 10;
// add(1)(2)(3)(4)(5) === 15;
const x = add(1)(2)(3);
console.log(x);
```

This is the right way: 

```js
function add() {
  var total = 0;

  function sum() {
    if (arguments.length) {
      var arr = Array.prototype.slice.call(arguments).sort();
      total = total + arrayAdder(arr);
      return sum;
    } else {
      return total;
    }
  }

  if (arguments.length) {
    var arr1 = Array.prototype.slice.call(arguments).sort();
    var mytotal = arrayAdder(arr1);
    return sum(mytotal);
  } else {
    return sum();
  }

  function arrayAdder(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
      x = x + arr[i];
    }
    return x;
  }
}

add(1)(2)(3)(); // 6
add(1, 2, 3)(); // 6
```

```js
function add(x) {
  return function (y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return arguments.callee;
    } else {
      return x;
    }
  };
}

add(1)(2)(3)(); // 6
```
