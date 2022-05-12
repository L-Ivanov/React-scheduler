import React from "react";
import Task from './Task'
//
// const tasks = [
//     {
//         id: 1,
//         text: 'Going to work',
//         day: 'first',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Going to eat',
//         day: 'first',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Going to sleep',
//         day: 'first',
//         reminder: false,
//     },
//     {
//         id:4,
//         text: 'I am boomer',
//         day:'first',
//         reminder:false,
//
//     }


// ];

const Tasks = ({tasks, onDelete, onToggle}) => {

    // return (<>
    //     {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    // </>)

    return (<>{tasks.map((task, index) => (<Task key={index} task={task}
                                          onDelete={onDelete}
                                          onToggle={onToggle}/>))}</>)


}
export default Tasks;