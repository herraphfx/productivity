
import { Checkbox } from "./layout/Checkbox";
import { useTasks } from '../hooks';


export const Tasks = () => {
    const   tasks   = [];

    

    let projectName = '';

    return (
        <div className="tasks" data-testid='tasks'>
            <h2 datatestid='project-name'>{projectName}</h2>
                <ul className="tasks_list"></ul>
                {tasks.map((task)=>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}/>
                        <span>{task.task}</span>
                    </li>
                ))}
        </div>
    )
}