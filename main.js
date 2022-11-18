const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d");
const lineWidth = 15;

function septup() {
  canvasEl.width = canvasCtx.width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
  //desenho campo
  canvasCtx.fillStyle = "#286047";
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  canvasCtx.fillStyle = "#FFF";

  //desenho linha central
  canvasCtx.fillRect(
    window.innerWidth / 2 - lineWidth / 2,
    0,
    lineWidth,
    window.innerHeight
  );

  //desenho raquete esquerda
  canvasCtx.fillRect(10, 100, lineWidth, 200);

  //desenho raquete direita
  canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 200, lineWidth, 200);

  //desenho a bolinha
  canvasCtx.beginPath();
  canvasCtx.arc(350, 300, 20, 0, 2 * Math.PI, false);
  canvasCtx.fill();

  //desenho o placar
  canvasCtx.font = "bold 72px Arial";
  canvasCtx.textAlign = "center";
  canvasCtx.textBaseline = "top";
  canvasCtx.fillStyle = "#fff";
  canvasCtx.fillText("3", window.innerWidth / 4, 50);
  canvasCtx.fillText("1", window.innerWidth / 4 + window.innerWidth / 2, 50);
}

septup();
draw();
