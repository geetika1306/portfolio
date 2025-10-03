function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// ----------------------
// TYPEWRITER EFFECT
// ----------------------
const texts = ["DEVELOPER", "DESIGNER", "STUDENT"]; // must be an array

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000); // wait before erasing
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.substring(
      0,
      textElements.innerHTML.length - 1
    );
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length; // move to next word
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
