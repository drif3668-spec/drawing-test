const canvas = document.querySelector("#canvas");
const clear = document.querySelector("#clear");
const ctx = canvas.getContext("2d");
let drawing = false;

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#0f766e";

function point(event) {
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (canvas.width / rect.width);
  const y = (event.clientY - rect.top) * (canvas.height / rect.height);
  return { x, y };
}

canvas.addEventListener("pointerdown", (event) => {
  drawing = true;
  const p = point(event);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
});

canvas.addEventListener("pointermove", (event) => {
  if (!drawing) return;
  const p = point(event);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
});

window.addEventListener("pointerup", () => { drawing = false; });
clear.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));
