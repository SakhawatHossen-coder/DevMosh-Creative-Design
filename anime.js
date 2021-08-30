anime({
  targets: ".model",
  translateX: -50,
  direction: "alternate",
});

//img -3
anime({
  targets: ".img1",
  translateX: -250,
  rotate: {
    value: 310,
    duration: 1500,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1,
    duration: 1200,
    delay: 500,
    easing: "easeInOutQuart",
  },
});
anime({
  targets: ".img2",
  translateX: -350,
  rotate: {
    value: 290,
    duration: 1500,
    easing: "easeInOutSine",
  },
});
anime({
  targets: ".img3",
  translateX: -250,
  rotate: {
    value: 370,
    duration: 1500,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1,
    duration: 1200,
    delay: 500,
    easing: "easeInOutQuart",
  },
});
anime({
  targets: ".img4",
  translateX: -50,
  rotate: {
    value: 70,
    duration: 1500,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1,
    duration: 1200,
    delay: 500,
    easing: "easeInOutQuart",
  },
});
anime({
  targets: ".img5",
  translateX: -10,
  rotate: {
    value: 70,
    duration: 1500,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1,
    duration: 1200,
    delay: 500,
    easing: "easeInOutQuart",
  },
});

//typing animation

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// project counting ++

var roundLogEl = document.querySelector(".number");

anime({
  targets: roundLogEl,
  innerHTML: [0, 70 + "+"],
  easing: "linear",
  round: 10, // Will round the animated value to 1 decimal
});
