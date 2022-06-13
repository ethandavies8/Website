let gameState ='start';
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let board = document.querySelector('gameboard');
let initialBall = document.querySelector('.ball');
let ball = document.querySelector('.ball');
let score1 = document.querySelector('.player1_score');
let score2 = document.querySelector('.player2_score');
let message = document.querySelector('.startMessage');
let player1Location = paddle_1.getBoundingClientRect();
let player2Location = paddle_2.getBoundingClientRect();
let initialBallLocation = ball.getBoundingClientRect();
let ballLocation = initial_ball_coord;
let boardLocation = board.getBoundingClientRect();
let paddle = 
    document.querySelector('.paddle').getBoundingClientRect();
  
let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);

document.addEventListener('keydown', (e) => {
if (e.key == 'Enter' && gameState == 'start'){
        message.innerHTML = '';
        message.style.left = 42 + 'vw';
        requestAnimationFrame(() => {
            dx = Math.floor(Math.random() * 4) + 3;
            dy = Math.floor(Math.random() * 4) + 3;
            dxd = Math.floor(Math.random() * 2);
            dyd = Math.floor(Math.random() * 2);
            moveBall(dx, dy, dxd, dyd);
        })
}
});