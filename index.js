function firstAction(next) {
  setTimeout(() => {
    console.log("first");
    next("snickers");
  }, 2000);
}

function secondAction(next, value) {
  setTimeout(() => {
    console.log(value);
    console.log("second");
    next();
  }, 1000);
}

function series(fns, index = 0, value = null) {
  const next = (result) => {
    series(fns, index + 1, result);
  };
  const fn = fns[index];
  if (typeof fn === 'function') {
    fn(next, value);
  }
}

series([
  firstAction,
  secondAction,
]);
