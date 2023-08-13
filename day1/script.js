var content = "";

function showH2Element() {
  alert("Showing H2 Element.");
}

function getContent() {
  content = document.getElementById("myInput").value;
  //   content = window.document.getElementById("myInput").value;
}

function createAnElement() {
  console.log("Creating an element");
  getContent();

  var headingElement = document.createElement("h2"); // CREATION of ELEMENT
  headingElement.innerHTML = content;

  var myContainerElement = document.getElementById("myContainerId");
  myContainerElement.style.background = "yellow";
  myContainerElement.appendChild(headingElement);
}

function replaceElement() {
  getContent();

  var myContainerElement = document.getElementById("myContainerId");
  //   myContainerElement.innerHTML = `<h2>${content}</h2>`; // REPLACE
  myContainerElement.innerText = `<h2>${content}</h2>`; // REPLACE
  //   myContainerElement.innerText = "<h2>" + content + "</h2>"; // REPLACE
}

function createAnchorElement() {
  var anchorElement = document.createElement("a"); // <a></a>
  anchorElement.innerText = "Go to facebook"; // <a>Go to facebook </a>
  anchorElement.setAttribute("href", "https://www.facebook.com"); // <a href="https://www.facebook.com">Go to facebook </a>
  anchorElement.setAttribute("alt", "Facebook"); // <a href="https://www.facebook.com" alt="Facebook">Go to facebook </a>
  anchorElement.setAttribute("target", "_blank"); // <a href="https://www.facebook.com" alt="Facebook" target="_blank">Go to facebook </a>

  var myContainerElement = document.getElementById("myContainerId");
  myContainerElement.appendChild(anchorElement);
}

function appendContent() {
  var newElement = document.createElement("h2");
  newElement.innerHTML = "Hiiiiii";
  var myContainerElement = document.getElementById("myContainerId");
  //   myContainerElement.appendChild(newElement);
  myContainerElement.append(newElement);
  myContainerElement.append("<h2>How are you? </h2>");
}

function getChild() {
  var myContainerElement = document.getElementById("myContainerId");
  var children = myContainerElement.innerHTML;

  console.log("Children:", children);
}

function getByClassName() {
  var elementsByClassName = document.getElementsByClassName("box");
  console.log("Elements By Classname: ", elementsByClassName);

  elementsByClassName[1].innerHTML = "<h1>Hello in the Box Element</h1>";
  elementsByClassName[1].style.color = "red";

  elementsByClassName[3].innerHTML = "<h1>Hello in the Box Element</h1>";
  elementsByClassName[3].style.color = "green";
}

function getByTagName() {
  var elementsByTag = document.getElementsByTagName("div");
  console.log("Elements By TagName: ", elementsByTag);

  elementsByTag[2].style.background = "orange";
  elementsByTag[2].style.color = "red";
  elementsByTag[2].innerHTML = "<h1>SELECTED BY TAG</h1>";

  var buttons = document.getElementsByTagName("button");
  console.log("Elements By TagName: ", buttons);

  buttons[2].style.background = "orange";
  buttons[2].style.color = "red";
}

// querySelector - returns only one element

// document.querySelector(".myClass");
// document.querySelector("#myId");
// document.querySelector("div");

// // querySelectorAll -> multiple elements

// document.querySelectorAll(".myClass");
// document.querySelectorAll("#myId");
// document.querySelectorAll("div");

function useQuerySelectorWithId() {
  const queryElementsById = document.querySelector("#myId");
  console.log("Query Elements By Id: ", queryElementsById);

  queryElementsById.style.color = "blue";
}

function useQuerySelectorWithClassName() {
  const queryElementsByClass = document.querySelector(".myClass");
  console.log("Query Elements By Class: ", queryElementsByClass);
  queryElementsByClass.style.color = "orange";
}

function useQuerySelectorWithTagName() {
  const queryElementsByTag = document.querySelector("h3");
  console.log("Query Elements By Tag: ", queryElementsByTag);

  queryElementsByTag.style.color = "red";
}

function useQuerySelectorAllWithId() {
  const queryElementsById = document.querySelectorAll("#myId");
  console.log("Query Elements By Id: ", queryElementsById);
  queryElementsById.forEach((currentElement) => {
    currentElement.style.background = "yellow";
    currentElement.style.color = "brown";
  });
}

function useQuerySelectorAllWithClassName() {
  const queryElementsByClass = document.querySelectorAll(".myClass");
  console.log("Query Elements By Class: ", queryElementsByClass);
  queryElementsByClass.forEach((currentElement) => {
    currentElement.style.background = "orange";
    currentElement.style.color = "red";
  });
}

function useQuerySelectorAllWithTagName() {
  const queryElementsByTag = document.querySelectorAll("h3");
  console.log("Query Elements By Tag: ", queryElementsByTag);
  queryElementsByTag.forEach((currentElement) => {
    currentElement.style.background = "blue";
    currentElement.style.color = "white";
  });
}
