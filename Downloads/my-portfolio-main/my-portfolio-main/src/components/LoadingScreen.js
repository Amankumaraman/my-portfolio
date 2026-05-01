import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    const messages = [
      "LOADING CORE MODULES...",
      "SYNCING NEURAL INTERFACE...",
      "ESTABLISHING SECURE PROTOCOLS...",
      "CONNECTING TO DATABASE...",
      "SYSTEM READY."
    ];

    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 5) + 1;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        setTimeout(onFinish, 500);
      }
      setPercent(currentPercent);
      setStatus(messages[Math.floor((currentPercent / 101) * messages.length)]);
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-retro)',
        color: 'var(--neon-cyan)'
      }}
    >
      <div style={{ width: '300px', textAlign: 'left' }}>
        <p style={{ fontSize: '0.8rem', marginBottom: '10px' }}>{status}</p>
        <div style={{ width: '100%', height: '4px', background: '#222', position: 'relative' }}>
          <motion.div 
            style={{ 
              height: '100%', 
              background: 'var(--neon-cyan)', 
              width: `${percent}%`,
              boxShadow: '0 0 10px var(--neon-cyan)'
            }} 
          />
        </div>
        <p style={{ textAlign: 'right', fontSize: '0.7rem', marginTop: '5px' }}>{percent}%</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
