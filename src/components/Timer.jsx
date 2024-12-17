import React from 'react';
import { useTime } from 'react-timer-hook';

function MyTime() {
  const { seconds, minutes, hours } = useTime();
  const currentTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontSize: '20px' }}>
        <span>Time: {currentTime}</span> {/* แสดง hh:mm:ss */}
      </div>
    </div>
  );
}

export default function Timer() {
  return (
    <div className="Timer">
      <MyTime />
    </div>
  );
}
