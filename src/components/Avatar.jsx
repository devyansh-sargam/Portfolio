import React from 'react';

const Avatar = () => {
  const styles = {
    container: {
      width: 300,
      height: 220,
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      perspective: '900px',
    },
    rotator: {
      width: 180,
      height: 220,
      transformStyle: 'preserve-3d',
      animation: 'swing 4s ease-in-out infinite',
      position: 'relative',
    },
    glow: {
      position: 'absolute',
      inset: '-12px',
      borderRadius: '12px',
      filter: 'blur(18px)',
      background: 'rgba(120, 160, 255, 0.35)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: 0,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      transform: 'scale(2)',
      backfaceVisibility: 'hidden',
      position: 'relative',
      zIndex: 1,
      transition: 'filter 0.3s ease',
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes swing {
            0%   { transform: rotateY(-15deg); }
            50%  { transform: rotateY(15deg); }
            100% { transform: rotateY(-15deg); }
          }

          .avatar-wrap:hover .glow {
            opacity: 0.6;
          }

          .avatar-wrap:hover img {
            filter: drop-shadow(0 0 10px rgba(140, 180, 255, 0.45));
          }
        `}
      </style>

      <div style={styles.container}>
        <div className="avatar-wrap" style={styles.rotator}>
          <div className="glow" style={styles.glow} />
          <img src="/Subject.png" alt="Avatar" style={styles.image} />
        </div>
      </div>
    </>
  );
};

export default Avatar;
