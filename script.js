var name = " Aishani,";
var home1 = document.getElementById("name");

function typeWrite() {
  var i = 0;
  var speed = 250;
  var id = setInterval(typewrite, speed);
  function typewrite() {
    if (i == name.length) {
      clearInterval(id);
    } else {
      home1.innerHTML += name.charAt(i);
      i++;
      console.log(i);
    }
  }
}

setTimeout(typeWrite, 5000);

function transitiond() {
  var e1 = document.getElementById("home1");
  var e2 = document.getElementById("home2");
  var e3 = document.getElementById("b1");
  var e4 = document.getElementById("b2");
  var e5 = document.getElementById("b3");
  var e6 = document.getElementById("b4");
  var t = 0;
  var x = 0.0;
  var xx = 0.0;
  var id = setInterval(step, 90);
  function step() {
    t += 1;

    if (t >= 15) {
      x += 0.016;
      x = Math.min(1.0, x);
    }
    if (x == 1) {
      xx += 0.03;
    }

    xx = Math.min(1.0, xx);
    e1.style.color = `rgba(255, 255, 255, ${x})`;
    e2.style.color = `rgba(255, 255, 255, ${xx})`;
    e3.style.color = `rgba(255, 255, 255, ${xx})`;
    e4.style.color = `rgba(255, 255, 255, ${xx})`;
    e5.style.color = `rgba(255, 255, 255, ${xx})`;
    e6.style.color = `rgba(255, 255, 255, ${xx})`;

    e3.style.border = `rgba(255, 255, 255, ${xx}) solid 1px`;
    e4.style.border = `rgba(255, 255, 255, ${xx}) solid 1px`;
    e5.style.border = `rgba(255, 255, 255, ${xx}) solid 1px`;
    e6.style.border = `rgba(255, 255, 255, ${xx}) solid 1px`;
    if (xx == 1) {
      clearInterval(id);
    }
  }
}

transitiond();

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

function ff() {
  var elem = document.getElementById("home2");
  elem.innerText = ":(";
  elem.style.fontSize = "5rem";
}

function fff() {
  var elem = document.getElementById("home2");
  elem.innerHTML = "How about I take you out for dinner?";
  elem.style.fontSize = "0.75rem";
}

b4.onmouseover = ff;
b4.onmouseleave = fff;

function df() {
  this.style.color = "black";
}
function _df() {
  this.style.color = "white";
}

b5.onmouseover = df;
b6.onmouseover = df;
b5.onmouseleave = _df;
b6.onmouseleave = _df;

function transition1() {
  e1 = document.getElementById("please1");
  e2 = document.getElementById("b5");
  e3 = document.getElementById("b6");
  var t = 0;
  var x = 0.0;
  var xx = 0.0;
  var id = setInterval(step, 90);
  function step() {
    t += 1;

    if (t >= 15) {
      x += 0.016;
      x = Math.min(1.0, x);
    }
    if (x == 1) {
      xx += 0.03;
    }

    xx = Math.min(1.0, xx);
    e1.style.color = `rgba(255, 255, 255, ${x})`;
    e2.style.color = `rgba(255, 255, 255, ${xx})`;
    e3.style.color = `rgba(255, 255, 255, ${xx})`;
    e2.style.border = `rgba(255, 255, 255, ${xx}) solid 1px`;
    e3.style.border = `rgba(255, 255, 255, ${xx}) solid 1px`;
    if (xx == 1) {
      clearInterval(id);
    }
  }
}

b4.onclick = transition1;

var header = document.getElementById("header");
var homelink = document.getElementById("homelink");
homelink.style.color = `rgba(255,255,255,0)`;

function wf() {
  var Y = Math.min(0.8, document.documentElement.scrollTop / 150.0);
  header.style.backgroundColor = `rgba(0,0,0,${Y})`;
  homelink.style.color = `rgba(255,255,255,${Y})`;
}

window.onscroll = wf;
