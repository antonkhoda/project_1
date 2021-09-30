$(function () {
  $("#phone-input").mask("+38(099) 999-9999");
});

function openbox(box, dark, header) {
  var display = document.getElementById(box).style.display;
  var darkbg = document.getElementById(dark).style.display;
  var head = document.querySelector("header");
  if (display == "none") {
    document.getElementById(box).style.display = "block";
    document.getElementById(dark).style.display = "block";
    head.classList.add("darkarea");
  } else {
    document.getElementById(box).style.display = "none";
    document.getElementById(dark).style.display = "none";
    head.classList.remove("darkarea");
  }
}

function closebox(box, dark, header) {
  var display = document.getElementById(box).style.display;
  var darkbg = document.getElementById(dark).style.display;
  var head = document.querySelector("header");
  if (darkbg == "block") {
    document.getElementById(box).style.display = "none";
    document.getElementById(dark).style.display = "none";
    head.classList.remove("darkarea");
  } else {
    document.getElementById(box).style.display = "block";
    document.getElementById(dark).style.display = "block";
    head.classList.add("darkarea");
  }
}

var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};
var hamburgers = document.querySelectorAll(".hamburger");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu);
});

if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.classList.toggle("is-active");
      },
      false
    );
  });
}

function refresh() {
  window.location.reload();
}
