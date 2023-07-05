"use strict";

//function to create array from object
function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) {
      c[b] = a[b];
    }
    return c;
  }
  return Array.from(a);
}

//variable that determines if timer is running
var playing = true;

//Function that updates a timer variable every 1000ms(1 second)
var timer = function () {
  return setInterval(function () {
    var a = document.getElementById("counter");
    var b = parseInt(a.innerText);
    a.innerText = b + 1;
  }, 1000);
};

//Initialization for interval variable
var interval = timer();

//Variables to match elements within the DOM
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var heart = document.getElementById("heart");
var pause = document.getElementById("pause");
var commentForm = document.getElementsByTagName("form")[0];

//Minus functionality event listener
minus.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  a.innerText = b - 1;
});

//Plus functionality event listener
plus.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  a.innerText = b + 1;
});

//Like functionality event listener
heart.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  var c = document.querySelector(".likes");
  var d;
  //checks to see if second was already "liked"
  if ([].concat(_toConsumableArray(c.children)).map(function (a) {
    return parseInt(a.dataset.num);
  }).includes(b)) {
    //If liked adds to the previous like counter
    d = document.querySelector('[data-num="' + b + '"]');
    var e = parseInt(d.children[0].innerText);
    d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
  } else {
    //If not liked it will add a new line
    d = document.createElement("li");
    d.setAttribute("data-num", b);
    d.innerHTML = b + " has been liked <span>1</span> time";
    c.appendChild(d);
  }
});

//Pause button functionality event listener
pause.addEventListener("click", function () {
  if (playing) {
    playing = false;
    clearInterval(interval);
    this.innerText = "resume";
  } else {
    playing = true;
    interval = timer();
    this.innerText = "pause";
  }
  [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function (a) {
    if (a.id !== "pause") {
      a.disabled = !playing;
    }
  });
});

//Comment area functionality event listener
commentForm.addEventListener("submit", function (a) {
  a.preventDefault();
  var b = this.children[0];
  var c = b.value;
  b.value = "";
  var d = document.querySelector(".comments");
  var e = document.createElement("p");
  e.innerText = c;
  d.appendChild(e);
});