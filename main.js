radius = 30;

function main() {
  ball = document.createElement('div');
  ball.style.position = 'absolute';
  ball.style.width = 2 * radius + 'px';
  ball.style.height = 2 * radius + 'px';
  ball.style.borderRadius = radius + 'px';
  ball.style.left = 5/100*(window.innerWidth) - radius + 'px'
  ball.style.top = 95/100*(window.innerHeight) - radius + 'px'
  ball.style.backgroundColor = 'IndianRed'
  document.body.appendChild(ball);
}
