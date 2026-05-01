import React, { useRef, useEffect, useState } from 'react';

const MarioGame = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('START'); // START, PLAYING, GAMEOVER, WIN
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);

  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Game Constants
    const gravity = 0.6;
    const playerWidth = 40;
    const playerHeight = 40;
    
    // Player Object
    const player = {
      x: 100,
      y: 100,
      width: playerWidth,
      height: playerHeight,
      color: '#00f3ff',
      dy: 0,
      jumpForce: -12,
      grounded: false,
      speed: 6,
      movingLeft: false,
      movingRight: false,
    };

    // Platforms
    const platforms = [
      { x: 0, y: canvas.height - 40, width: 2000, height: 40, label: 'BASE' },
      { x: 400, y: 300, width: 150, height: 20, label: 'Python' },
      { x: 650, y: 220, width: 150, height: 20, label: 'Django' },
      { x: 900, y: 150, width: 150, height: 20, label: 'React' },
      { x: 1200, y: 250, width: 150, height: 20, label: 'FastAPI' },
      { x: 1500, y: 180, width: 150, height: 20, label: 'AWS' },
      { x: 1800, y: 280, width: 150, height: 20, label: 'GenAI/LLM' },
    ];

    const goalX = 2000;

    // Input Handling
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
      
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (player.grounded) {
          player.dy = player.jumpForce;
          player.grounded = false;
        }
      }
      if (e.code === 'ArrowLeft') player.movingLeft = true;
      if (e.code === 'ArrowRight') player.movingRight = true;
    };

    const handleKeyUp = (e) => {
      if (e.code === 'ArrowLeft') player.movingLeft = false;
      if (e.code === 'ArrowRight') player.movingRight = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Camera offset
    let cameraX = 0;

    const update = () => {
      // Apply Gravity
      player.dy += gravity;
      player.y += player.dy;

      // Movement
      if (player.movingLeft) player.x -= player.speed;
      if (player.movingRight) player.x += player.speed;

      // Screen bounds
      if (player.x < 0) player.x = 0;

      // Camera Follow
      if (player.x > canvas.width / 2) {
        cameraX = player.x - canvas.width / 2;
      }

      // Collision Detection
      player.grounded = false;
      platforms.forEach(plat => {
        if (
          player.x < plat.x + plat.width &&
          player.x + player.width > plat.x &&
          player.y + player.height > plat.y &&
          player.y + player.height < plat.y + 10 + Math.abs(player.dy)
        ) {
          if (player.dy >= 0) {
            player.grounded = true;
            player.dy = 0;
            player.y = plat.y - player.height;
          }
        }
      });

      // Falling off
      if (player.y > canvas.height + 100) {
        setGameState('GAMEOVER');
        setScore(scoreRef.current);
      }

      // Goal Check
      if (player.x > goalX) {
        setGameState('WIN');
        setScore(scoreRef.current);
      }

      // Update Score based on distance
      scoreRef.current = Math.max(scoreRef.current, Math.floor(player.x / 10));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(-cameraX, 0);

      // Draw Grid Lines (Background Parallax)
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3000; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      // Draw Platforms
      platforms.forEach(plat => {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#bc13fe';
        ctx.fillStyle = '#111';
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#bc13fe';
        ctx.lineWidth = 2;
        ctx.strokeRect(plat.x, plat.y, plat.width, plat.height);

        // Label
        ctx.fillStyle = '#fff';
        ctx.font = '10px "Press Start 2P"';
        ctx.fillText(plat.label, plat.x + 10, plat.y - 10);
      });

      // Goal Flag
      ctx.fillStyle = '#ff00ff';
      ctx.fillRect(goalX, 0, 10, canvas.height);
      ctx.font = '12px "Orbitron"';
      ctx.fillText("SENIOR LEVEL", goalX - 50, 50);

      // Draw Player
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#00f3ff';
      ctx.fillStyle = '#00f3ff';
      ctx.fillRect(player.x, player.y, player.width, player.height);
      
      // Face
      ctx.fillStyle = '#000';
      ctx.fillRect(player.x + 25, player.y + 10, 5, 5);
      ctx.fillRect(player.x + 5, player.y + 25, 20, 2);
      
      ctx.restore();

      // UI Text (Fixed)
      ctx.fillStyle = '#00f3ff';
      ctx.font = '14px "Press Start 2P"';
      ctx.fillText(`XP: ${scoreRef.current}`, 20, 30);

      update();
      if (gameState === 'PLAYING') {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameState]);

  return (
    <div className="game-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div className="cyber-panel" style={{ display: 'inline-block', position: 'relative', padding: 0, border: '2px solid var(--neon-cyan)' }}>
        
        {gameState === 'START' && (
          <div className="game-overlay" style={overlayStyle}>
            <h2 className="gaming-font" style={{ fontSize: '2rem' }}>AMAN'S TECH QUEST</h2>
            <p className="retro-font" style={{ margin: '20px 0' }}>{'>'} NAVIGATE TO THE SENIOR LEVEL</p>
            <p className="retro-font" style={{ fontSize: '0.6rem' }}>ARROWS TO MOVE | SPACE TO JUMP</p>
            <button className="cyber-button" onClick={() => { scoreRef.current = 0; setGameState('PLAYING'); }}>START MISSION</button>
          </div>
        )}

        {gameState === 'GAMEOVER' && (
          <div className="game-overlay" style={overlayStyle}>
            <h2 className="gaming-font" style={{ color: '#ff00ff' }}>MISSION FAILED</h2>
            <p className="retro-font">XP EARNED: {score}</p>
            <button className="cyber-button" onClick={() => { scoreRef.current = 0; setGameState('PLAYING'); }}>RETRY MISSION</button>
          </div>
        )}

        {gameState === 'WIN' && (
          <div className="game-overlay" style={overlayStyle}>
            <h2 className="gaming-font" style={{ color: '#00f3ff' }}>MISSION ACCOMPLISHED</h2>
            <p className="retro-font">YOU REACHED SENIOR LEVEL!</p>
            <p className="retro-font">FINAL XP: {score}</p>
            <button className="cyber-button" onClick={() => { scoreRef.current = 0; setGameState('PLAYING'); }}>PLAY AGAIN</button>
          </div>
        )}

        <canvas 
          ref={canvasRef} 
          width={800} 
          height={400} 
          style={{ 
            background: '#050505', 
            display: 'block', 
            maxWidth: '100%', 
            height: 'auto',
            border: '1px solid #222'
          }}
        />
      </div>
      
      <style>{`
        .game-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.85);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          backdrop-filter: blur(5px);
        }
        .cyber-button {
          background: transparent;
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          padding: 12px 24px;
          font-family: var(--font-gaming);
          cursor: pointer;
          margin-top: 30px;
          transition: all 0.3s;
          letter-spacing: 2px;
        }
        .cyber-button:hover {
          background: var(--neon-cyan);
          color: #000;
          box-shadow: 0 0 30px var(--neon-cyan);
        }
      `}</style>
    </div>
  );
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.8)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 5,
};

export default MarioGame;
