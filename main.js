radius = 20;
dt = 0.01;
V0 = 100
g = 9.890


function handleClick(event) {
  let call = setInterval(frame, dt);
  x0 = parseInt(originX);
  y0 = parseInt(originY);
  yNormal = (y0 - 5 / 100 * (window.innerHeight))/(90/100*window.innerHeight)
  Y0 = 1 - yNormal
  angle = 2*Math.atan(Math.sqrt(3)*Math.sqrt(1/3 *Y0 - 1/3 *((Y0 + 2.0)*(Y0 + 4.0))**0.5 + 1))
  anglePrint = document.createElement('div');
  anglePrint.innerHTML = 'Optimal angle = ' + Math.round(angle*180/Math.PI) + '°'
  anglePrint.id = 'anglePrint'
  document.body.appendChild(anglePrint)
  t = 0
  function frame() {
    t = t + dt
    x = x0 + V0 * Math.cos(angle) * t
    y = y0 - V0 * Math.sin(angle) * t + 1 / 2 * g * t ** 2
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    if (x > (95 / 100 * (window.innerWidth) - radius) || y > (95 / 100 * (window.innerHeight) - radius)) {
      clearInterval(call)
    }
  }
}

var originX
var originY

function main() {
  if (!!document.getElementById('ball')) {
    document.body.removeChild(ball);
  }
  ball = document.createElement('div');
  ball.style.position = 'absolute';
  ball.style.width = 2 * radius + 'px';
  ball.style.height = 2 * radius + 'px';
  ball.style.borderRadius = radius + 'px';
  ball.style.left = 5 / 100 * (window.innerWidth) - radius + 'px';
  originX = ball.style.left;
  ball.style.top = 95 / 100 * (window.innerHeight) - radius + 'px';
  originY = ball.style.top;
  ball.style.backgroundColor = 'IndianRed';
  ball.id = 'ball';
  ball.addEventListener("dragover", function(e){
    var dragY = e.pageY;
    ball.style.top = dragY + 'px';
}, true);
  ball.addEventListener("mouseup", handleClick);
  document.body.appendChild(ball);
}
