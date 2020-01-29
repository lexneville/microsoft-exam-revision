window.onload = function () {
    console.log("Page loaded");
}

let outerDiv = document.getElementById("outerDiv");
alert(outerDiv.innerHTML);

let allPara = document.getElementsByTagName("p");
alert(allPara.length);

let subPara = document.getElementsByClassName("subPara");
alert("<p> elements with class subPara: " + subPara.length);

let allPara2 = document.querySelectorAll("p");
alert(allPara2.length);

let outerDiv2 = document.querySelector("#outerDiv");
alert(outerDiv2.innerHTML);

let element = document.getElementById("innerDiv");
alert(element.innerHTML);
element.removeChild(element.childNodes[7]);
let afterRemove = document.getElementById("innerDiv");
alert(afterRemove.innerHTML);
while (element.firstChild) {
    element.removeChild(element.firstChild);
}
alert(afterRemove.innerHTML);
