const circle = document.querySelector("#circle");
const clicks = document.querySelector("#clicks");
const message = document.querySelector("#message");
let counter = 0;
let height = 100;
let width = 100;
let animation = "move-right";

circle.addEventListener("click", function() {
  counter++;
	console.log('geklikt op ' + time +', counter: ' + counter)
  clicks.textContent = counter;
  height--;
  width--;
  circle.style.height = height + "px";
  circle.style.width = width + "px";

  if (height <= 96) {
    message.textContent = "U hebt het spel uitgespeeld!";
    message.style.display = "block";
    circle.style.display = "none";
  } else {
    let newAnimation = animation;
    while (newAnimation === animation) {
      let animations = ["move-right", "move-down", "move-left", "move-up"];
      newAnimation = animations[Math.floor(Math.random() * animations.length)];
    }
    animation = newAnimation;
    circle.style.animation = `${animation} 1s linear infinite`;
  }

});
let intervalId;
let time = 0;

intervalId = setInterval(function(){
	time++;
console.log("de tijd = " + time)
}, 1000);
function reset(){
	height= 100;
	width = 100;
	counter = 0;
	  circle.style.height = height + "px";
  circle.style.width = width + "px";
    message.style.display = "none";
    circle.style.display = "block";
}
