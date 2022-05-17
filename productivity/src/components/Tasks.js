import react from "react";
import { Checkbox } from "./layout/Checkbox";

export const Tasks = () => {
    const tasks = [];

    let projectName = '';

    return (
        <div className="tasks" data-testid='tasks'>
            <h2 datatestid='project-name'>{projectName}</h2>
                <ul className="task_list"></ul>
                {tasks.map(task=>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}/>
                        <span>{task.task}</span>
                    </li>
                ))}
        </div>
    )
}