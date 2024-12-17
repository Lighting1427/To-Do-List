import React, { useState } from "react";
import "./Task_Input.css";

export default function Task_input({ onAddTask }) {
  const [text, setText] = useState(""); //text ไว้เว็บข้อความ setText เปลี่ยนค่าใน text

  const handleAddTask = () => {
    if (text.trim()) { //trim ใช้ตัดช่องว่างซ้ายและขวา
      onAddTask({ text, complete: false }); 
      setText(""); //หลังจากที่ กดปุ่มแล้วจะเปลี่ยนข้อความในกล่องเป็น ""
    } else {
      alert("Please enter a message!");
    }
  };

  return (
    <div className="Task_input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add your task"
        className="add_task"
      />
      <button className="add_button" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
}
