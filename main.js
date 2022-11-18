const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d");
const lineWidth = 15;
gapX = 10;

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

//raquete esquerda
const leftPaddle = {
  x: gapX,
  Y: 100,
  w: line.w,
  h: 200,
  draw: function () {
    canvasCtx.fillStyle = "#fff";
    canvasCtx.fillRect(this.x, this.Y, this.w, this.h);
  },
};
//raquete direita
const rightPaddle = {
  x: field.w - line.w - gapX,
  Y: 100,
  w: line.w,
  h: 200,
  draw: function () {
    canvasCtx.fillStyle = "#fff";
    canvasCtx.fillRect(this.x, this.Y, this.w, this.h);
  },
};

function septup() {
  canvasEl.width = canvasCtx.width = field.w;
  canvasEl.height = canvasCtx.height = field.h;
}

//desenho o placar
const score = {
  human: 1,
  computer: 2,
  draw: function () {
    canvasCtx.font = "bold 72px Arial";
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "top";
    canvasCtx.fillStyle = "#01341d";
    canvasCtx.fillText(this.human, field.w / 4, 50);
    canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50);
  },
};

//desenho bola
const ball = {
  x: 300,
  y: 200,
  r: 20,
  draw: function () {
    canvasCtx.fillStyle = "#fff";
    canvasCtx.beginPath();
    canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    canvasCtx.fill();
  },
};

function draw() {
  field.draw();
  line.draw();

  leftPaddle.draw();
  rightPaddle.draw();

  score.draw();
  ball.draw();
}

septup();
draw();
