import * as React from "react";
import { Snackbar, Alert } from "@mui/material";

export function Tasks() {
    // For tasks
    const [tasks, setTasks] = React.useState([]); // List of all tasks
    const [taskContent, setTaskContent] = React.useState(""); // New task input field content

    // For messages
    const [message, setMessage] = React.useState("");
    const [alertType, setAlertType] = React.useState("");

    function alert(message, type) {
        setMessage(message);
        setAlertType(type);
    }

    return (
        <>
            <link rel="stylesheet" href="static/style.css" />
            <div className="container">
                <div id="newtask">
                    <form onSubmit={(ev) => {
                        ev.preventDefault(); // Ensure the whole window doesn't reload because of the button
                        if (taskContent) {
                            tasks.push(taskContent); // Add the new task into the list of tasks
                            setTasks([...tasks]); // Trigger re-render of the screen with new tasks list
                            setTaskContent(""); // Reset the input field state

                            alert("Successfully added a new task!", "success");
                        }
                        else {
                            alert("Please enter some content for the task", "error");
                        }
                    }}>
                        <input placeholder="Task to be done.." value={taskContent} onChange={(ev) => {
                            setTaskContent(ev.target.value);
                        }} />
                        <button id="push">Add</button>
                    </form>
                </div>
                <div id="tasks">
                    {
                        tasks.length > 0 ?
                            tasks.map((task, idx) => {
                                return (
                                    <div className="task" key={idx}>
                                        <span>{`${idx + 1}. ${task}`}</span>
                                        <form onSubmit={(ev) => {
                                            ev.preventDefault();
                                            tasks.splice(idx, 1);
                                            setTasks([...tasks]);
                                            alert(`Successfully deleted task ${idx + 1}`, "info");
                                        }}>
                                            <button type="submit">Delete</button>
                                        </form>
                                    </div>
                                );
                            })
                            :
                            <div className="task">
                                <span><em>No tasks yet. Add one above!</em></span>
                            </div>
                    }
                </div>

                <span id="footer">Signed in as (username). <a href="/logout">Sign out</a></span>
            </div>

            <Snackbar open={!!message} autoHideDuration={3000} onClose={() => {setMessage("")}}>
                <Alert onClose={() => {setMessage("")}} severity={alertType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}