// getting previous style of the button
let btn = document.getElementById("btn");
const styles = window.getComputedStyle(btn);
const tagColor = styles.getPropertyValue("color");
// main function
function dash() {
  btn.style.color = "blue";
  btn.disabled = true;
  setTimeout(() => {
    btn.style.color = tagColor;
    btn.disabled = false;
  }, 5000);
}
document.g;
