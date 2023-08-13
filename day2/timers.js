var immediate;
function diffInTimers() {
  setTimeout(() => {
    console.log("SET TIMEOUT CALLED.");
  }, 0);

  immediate = setImmediate(() => {
    console.log("SET IMMEDIATE CALLED..");
  });
}

diffInTimers();
clearImmediate(immediate);
