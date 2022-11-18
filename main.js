const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d");
const lineWidth = 15;

//desenho campo
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, this.w, this.h);
  },
};

//desenho linha
const line = {
  w: 15,
  h: field.h,
  draw: function () {
    canvasCtx.fillStyle = "#FFF";
    canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, field.h);
  },
};

function septup() {
  canvasEl.width = canvasCtx.width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
  field.draw();
  line.draw();

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
