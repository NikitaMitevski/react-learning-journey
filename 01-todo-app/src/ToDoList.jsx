import { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat", "Sleep", "Play"]);
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

    return(
    <div>
        <h1>To - Do - Items</h1>

        <div>
            <input 
            type="text"
            placeholder="Enter Task"
            value={newTask}
            onChange={handleInputChange} 
            />

            <button onClick={addTask}>Add</button>        
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <p>{task}</p>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li> 
            )}
        </ol>
    </div>
    )

}

export default ToDoList;