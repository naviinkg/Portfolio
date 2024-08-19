import React, { useRef, useState, useEffect } from 'react';

const BreakoutGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestId = useRef<number>(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted) return; // Do nothing if the game hasn't started

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game variables
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const paddleWidth = 100;
    const paddleHeight = 10;
    const ballRadius = 10;
    const brickRowCount = 3;
    const brickColumnCount = 5;
    const brickWidth = 75;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;

    let x = canvasWidth / 2;
    let y = canvasHeight - 30;
    let dx = 2;
    let dy = -2;
    let paddleX = (canvasWidth - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;

    // Initialize bricks
    const bricks = Array.from({ length: brickColumnCount }, (_, c) =>
      Array.from({ length: brickRowCount }, (_, r) => ({
        x: c * (brickWidth + brickPadding) + brickOffsetLeft,
        y: r * (brickHeight + brickPadding) + brickOffsetTop,
        status: 1,
      }))
    );

    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
      }
    }

    function keyUpHandler(e: KeyboardEvent) {
      if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
      } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
      }
    }

    function collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const brick = bricks[c][r];
          if (brick.status === 1) {
            if (
              x > brick.x &&
              x < brick.x + brickWidth &&
              y > brick.y &&
              y < brick.y + brickHeight
            ) {
              dy = -dy;
              brick.status = 0;
            }
          }
        }
      }
    }

    function drawBall() {
      if (ctx) {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff5722'; // Orange color for the ball
        ctx.fill();
        ctx.closePath();
      }
    }

    function drawPaddle() {
      if (ctx) {
        ctx.beginPath();
        ctx.rect(paddleX, canvasHeight - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = '#4caf50'; // Green color for the paddle
        ctx.fill();
        ctx.closePath();
      }
    }

    function drawBricks() {
      if (ctx) {
        for (let c = 0; c < brickColumnCount; c++) {
          for (let r = 0; r < brickRowCount; r++) {
            const brick = bricks[c][r];
            if (brick.status === 1) {
              ctx.beginPath();
              ctx.rect(brick.x, brick.y, brickWidth, brickHeight);
              ctx.fillStyle = '#2196f3'; // Blue color for the bricks
              ctx.fill();
              ctx.closePath();
            }
          }
        }
      }
    }

    function draw() {
      if (ctx) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawBricks();
        drawBall();
        drawPaddle();
        collisionDetection();

        if (x + dx > canvasWidth - ballRadius || x + dx < ballRadius) {
          dx = -dx;
        }
        if (y + dy < ballRadius) {
          dy = -dy;
        } else if (y + dy > canvasHeight - ballRadius) {
          if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
          } else {
            setIsGameOver(true);
            return; // Stop the animation loop
          }
        }

        if (rightPressed && paddleX < canvasWidth - paddleWidth) {
          paddleX += 7;
        } else if (leftPressed && paddleX > 0) {
          paddleX -= 7;
        }

        x += dx;
        y += dy;
        requestId.current = requestAnimationFrame(draw);
      }
    }

    // Add event listeners
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);

    // Start the game
    draw();

    // Cleanup function
    return () => {
      cancelAnimationFrame(requestId.current);
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [gameStarted]); // Re-run effect when `gameStarted` changes

  const handleStartGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
  };

  const handleRestartGame = () => {
    setGameStarted(false);
    setIsGameOver(false);
    setTimeout(() => setGameStarted(true), 100); // Delay to allow state to update
  };

  return (
    <div>
      {!gameStarted && !isGameOver && (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      {isGameOver && (
        <button onClick={handleRestartGame}>Restart Game</button>
      )}
      {gameStarted && !isGameOver && <canvas ref={canvasRef} width={480} height={320} />}
    </div>
  );
};

export default BreakoutGame;
