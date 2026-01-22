import React, { useState, useEffect, useRef } from 'react';

const MAX_AVATAR_TILT_ANGLE = 12;

const Avatar = () => {
  const [avatarTiltTransform, setAvatarTiltTransform] = useState('');
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!avatarRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      let rotateY = (deltaX / (rect.width / 2)) * MAX_AVATAR_TILT_ANGLE;
      let rotateX = (-deltaY / (rect.height / 2)) * MAX_AVATAR_TILT_ANGLE;

      rotateX = Math.max(-MAX_AVATAR_TILT_ANGLE, Math.min(MAX_AVATAR_TILT_ANGLE, rotateX));
      rotateY = Math.max(-MAX_AVATAR_TILT_ANGLE, Math.min(MAX_AVATAR_TILT_ANGLE, rotateY));

      setAvatarTiltTransform(
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = {
    container: {
      width: 300,                 // wider container
      height: 220,
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end', // push image to the right
      alignItems: 'center',
      transform: avatarTiltTransform,
      transition: 'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)',
    },
    image: {
      width: 180,
      height: 220,
      objectFit: 'contain',
      transform: 'scale(2.22)',
      display: 'block',
    },
  };

  return (
    <div ref={avatarRef} style={styles.container}>
      <img src="/Subject.png" alt="Avatar" style={styles.image} />
    </div>
  );
};

export default Avatar;
