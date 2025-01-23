function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    start: "top 10%",
    end: "bottom 10%",
    scrub: 2,
  },
});

tl.to(
  "#page-1 h1",
  {
    x: -80,
  },
  "anim"
);
tl.to(
  "#page-1 h2",
  {
    x: 80,
  },
  "anim"
);

tl.to(
  "#page-1 video",
  {
    width: "90%",
  },
  "anim"
);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1",
    scroller: "#main",
    start: "top -120%",
    end: "top -130%",
    scrub: 2,
  },
});

tl2.to("#main", {
  backgroundColor: "#fff",
});
const cursorSound = document.getElementById("sound-on");
const video = document.querySelector(".main-video");
const cursor = document.getElementById("cursor");

let cursorWidth = cursor.offsetWidth;
let cursorHeight = cursor.offsetHeight;
let soundWidth;
let soundHeight;

function updateCursorDimensions() {
  cursorSound.style.display = "block";
  soundWidth = cursorSound.offsetWidth;
  soundHeight = cursorSound.offsetHeight;
  cursorSound.style.display = "none"; // Hide it again until needed
}

// Update dimensions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", updateCursorDimensions);

// Update cursor positions
document.addEventListener("mousemove", function (e) {
  const x = e.pageX; // Include scroll offsets
  const y = e.pageY;

  // Update default cursor position
  cursor.style.left = x - cursorWidth / 2 + "px";
  cursor.style.top = y - cursorHeight / 2 + "px";

  // Update sound-on cursor position
  cursorSound.style.left = x - soundWidth / 2 + "px";
  cursorSound.style.top = y - soundHeight / 2 + "px";
});

// Show sound-on cursor on video hover
video.addEventListener("mouseenter", function () {
  cursor.style.display = "none"; // Hide the default cursor
  cursorSound.style.display = "block"; // Show the sound-on cursor
});

// Hide sound-on cursor when leaving the video
video.addEventListener("mouseleave", function () {
  cursor.style.display = "block"; // Show the default cursor
  cursorSound.style.display = "none"; // Hide the sound-on cursor
});

// const tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#main",
//     scroller: "#main",
//     start: "top -2900%",
//     end: "top -2100%",
//     scrub: 2,
//     markers: true,
//   },
// });

// tl2.to("#main", {
//   backgroundColor: "#0f0d0d",
// });

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1",
    scroller: "#main",
    start: "top -360%",
    end: "top -390%",
    scrub: 2,
  },
});

tl3.to("#main", {
  backgroundColor: "#000",
});

let companies = document.querySelectorAll(".company");

companies.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let attr = elem.getAttribute("data-image");
    cursor.style.width = "400px";
    cursor.style.height = "300px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${attr})`;
    cursor.style.backgroundSize = "cover"; // Ensure the image covers the area
    cursor.style.backgroundPosition = "center"; // Center the image
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = "none";
  });
});

var purple = document.querySelectorAll("a");
const changeBg = document.querySelector(".purple");
purple.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    changeBg.style.opacity = 1;
  });
  link.addEventListener("mouseleave", function () {
    changeBg.style.opacity = 0;
  });
});
