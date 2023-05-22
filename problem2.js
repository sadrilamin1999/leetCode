/* var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11 */

function couner(n) {
  return function () {
    return n++;
  };
}

const frist = couner(10);
console.log(frist());
console.log(frist());
