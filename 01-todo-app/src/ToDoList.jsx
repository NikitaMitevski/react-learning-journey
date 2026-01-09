import { useState } from "react";
import './ToDoList.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat", "Sleep"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (!newTask.trim()) return;

        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <div className="main">
        <h1>To - Do - Items</h1>

        <div>
            <input 
            type="text"
            placeholder="Enter Task"
            value={newTask}
            onChange={handleInputChange}
            className = "input" 
            />

            <button className = "added" onClick={addTask}>Add</button>        
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <p>{task}</p>
                    <button onClick={() => deleteTask(index)} className="del">Delete</button>
                    <button onClick={() => moveTaskUp(index)} className="up">Up</button>
                    <button onClick={() => moveTaskDown(index)} className="down">Down</button>
                </li> 
            )}
        </ol>
    </div>
    )

}

export default ToDoList;