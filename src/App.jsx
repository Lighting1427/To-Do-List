import React, { useState } from "react";
import Header from "./components/Header";
import Task_input from "./components/Task_Input";
import Task_item from "./components/Task_Item";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); //เก็บข้อมูล { id, text, complete, time, notified }

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]); 
    //...tasks เป็นการคัดลอกข้อมูล Task ทั้งหมด
    //และเพิ่ม Task ใหม่ { id: Date.now(), ...newTask }
  };

  return (
    <>
      <Timer></Timer>
      <div className="ToDo_Background">
        <Header />
        <Task_input onAddTask={addTask} />
        <Task_item tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
