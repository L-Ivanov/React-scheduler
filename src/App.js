import Header from "./components/Header";
import Tasks from "./components/Tasks"
import {useEffect, useState} from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import AboutInfo from "./components/AboutInfo";
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])
    //fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8000/tasks');
        const data = await res.json();
        return data;


    }
    //fetch tasks
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:8000/tasks/${id}`);
        const data = await res.json();
        return data;


    }
    //Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task),

        })
        const data = await res.json();
        setTasks([...tasks, data]);
        // const id = Math.floor(Math.random()*1000)+1
        // const newTask = {id,...task}
        // setTasks([...tasks, newTask])

    }
    //Delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }
    //Toggle remainder

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder};
        const res = await fetch(`http://localhost:8000/${id}`, {
            method: 'PUT', headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateTask)


        })
        const data = await res.json();


        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    }
    return (<Router>

            <div className="container">
                <h1>Hello from React</h1>
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

                <Route path='/' exact render={(props)=>(
                    <>
                        {showAddTask && <AddTask onAdd={addTask}/>}
                        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
                                                   onToggle={toggleReminder}/> : 'No schedules to show'}
                    </>
                )}/>
                <Route path='/about' component={AboutInfo}/>
                <Footer/>


            </div>
        </Router>

    );
}

export default App;
