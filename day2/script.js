function getDimensions() {
  let width = window.innerWidth; // viewport width
  let height = window.innerHeight; // viewport height

  let screenWidth = screen.width; // entire device width
  let screenHeight = screen.height; // entire device height

  console.log(`Dimensions - ${width} x ${height}`);
  console.log(`Screen Dimensions - ${screenWidth} x ${screenHeight}`);
}

function openANewWindow() {
  window.open("https://facebook.com"); // Create a new tab in the window
}

// function myFunc(param1, param2) {}

//Normal Function
// myFunc("DATA", 10000);

//Callback Function - Function that takes another function as arguments / parameters
// setTimeout(myFunc, 10000);

// Timer Functions

// setTimeout - executes only once after the timeout
// clearTimeout - clears the timeout

// setInterval - executes on every interval (mulitple times)
// clearInterval - clears the interval

// setImmediate - executes immediately (highest priority)
// clearImmediate - clears the immediate func.

// setTimeout(function, time_in_ms);
var interval;
var timeout;
function setTimeoutTryout() {
  console.log("Timeout started....");
  setIntervalTryout();
  timeout = setTimeout(() => {
    document.getElementById("my-container").innerHTML =
      "<h1>Executed after Timeout</h1>";

    // clearInterval(interval);
  }, 10000);
}

// setInterval
function setIntervalTryout() {
  var count = 0;
  interval = setInterval(() => {
    count = count + 1;
    console.log("Set Interval is executed: ", count);
  }, 1000);
}

function clearIntervalTryout() {
  clearInterval(interval);
  clearTimeout(timeout);
}

function diffInTimers() {
  setTimeout(() => {
    console.log("SET TIMEOUT CALLED.");
  }, 0);

  //   setImmediate(() => {
  //     console.log("SET IMMEDIATE CALLED..");
  //   });
}
// setImmediate

// screen
// window
// document

// prompt;
// alert;
// confirm;

function alertTryout() {
  alert("Hello"); //shows the information
}

function promptTryout() {
  let username = prompt("Enter your name"); // gets data from the user
  console.log("User name: ", username);
}

function confirmTryout() {
  let confirmation = confirm("Are you sure, you want to logout?"); // gets yes or no from the user (confirmation)
  console.log("Logout: ", confirmation);
}

function afterLoad() {
  console.log("Body has been rendered in the browser.");
}

// events

// onclick - click event on any element
// onsubmit - form event while submitting
// onload - after the loading of the element

// onchange
// onmouseover
// onmouseup
// onmousedown
// onblur
