
import '../styles/Cursor.css'
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursorCustom"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>

      </div>
      <div className="cursorCustomIn"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>

      </div>
    </div >
  );
};

export default CustomCursor;