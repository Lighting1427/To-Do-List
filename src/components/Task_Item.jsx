import React, { useState, useEffect } from "react";
import "./Task_Item.css";

export default function Task_item({ tasks, setTasks }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editTime, setEditTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // อัปเดต currentTime ทุกวินาที 
  useEffect(() => {
    const interval = setInterval(() => { //setInterval จะทำงานทุก 1 วิ
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0"); //padStart หาก 9:5 จะแก้เป็น 09:05 ให้
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const time = `${hours}:${minutes}`;
      setCurrentTime(time); 
    }, 1000);
    return () => clearInterval(interval); //ล้างค่า interval เก่าออกแทนด้วยอันใหม่ทุกๆ 1 วิ ป้องกัน memory leak
  }, []); //[] จะทำงานครั้งเดียว

  // แจ้งเตือนเมื่อเวลาใน Task ตรงกับ currentTime
  useEffect(() => { // จะทำงานเมื่อ currentTime หรือ Task เปลี่ยน
    tasks.forEach((task) => {
      if (task.time === currentTime && !task.notified) { //task ไปรับมาจาก Task_input
        alert(`Task "${task.text}" is now!`);
        task.notified = true; //ป้องกันแจ้งเตือนซ้ำ
      }
    });
  }, [currentTime, tasks]); //จำทำงานทุกครั้งที่ currentTime กับ tasks เปลี่ยน

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task //!task.complelte เป็นการกลับค่า และ :task ส่งค่ากลับคืน
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
    setEditTime(task.time || "");
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: editText, time: editTime, notified: false }
          : task
      )
    );
    setEditId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => toggleComplete(task.id)}
          />
          {editId === task.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Edit your task"
              />
              <input
                type="time"
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
              />
              <button onClick={() => saveEdit(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: task.complete ? "line-through" : "none",
                }}
              >
                {task.text} {task.time ? `(${task.time})` : ""}
              </span>
              <button onClick={() => startEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
