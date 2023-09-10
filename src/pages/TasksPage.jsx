import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { TableTask } from '../components/TableTask'
import { TaskForm} from '../components/TaskForm'
import { getAllTasks, createTask, deleteTask} from '../api/task.api'
import { BtnLink } from '../components/BtnLink'

// const TASK_API = "http://localhost:8000/tasks/api/v1/tasks/"
// const FAKE_API = "https://api.escuelajs.co/api/v1/products"


export const TasksPage = () => {

  const [task, setTask] = useState([])
  const [pk, setPk] = useState("")


  // Get All tasks
  useEffect(() =>{
     const loadTask = async ()=> {
       const res = await getAllTasks()
       setTask(res.data)
       console.log(res)
    }
    loadTask()

  },[])

  // Create a new task
  // const onSubmit = (data) => {
  //   console.log(data)

  //   const taskCreate = async () => {
  //     const res = await createTask(data)
  //     return res
  //   }
  //   taskCreate()
  // }

   // Create a new task
  const onSubmit =  async (data) => {
      console.log(data)
      await createTask(data)
  }


  // Delete a task
  const handleDeleteTask = async (task_id) => {
    console.log("Valor Antes: ", task_id)
    task_id = task_id.toString()
    console.log("Valor despues: ",typeof task_id, task_id)
    
    await deleteTask(task_id)
    // console.log("Eliminar:::::::::::::::")
  }

  return (
    <>
      <div>TasksPage</div>
      <TaskForm pk={1} onSubmit={onSubmit}/>
      {/* <div>{task ? task: "xdf"}</div> Para mostrar los datos de esta forma, no tiene que ser de tipo json o similar */}
      <div>
        {<TableTask datos={task} handleDeleteTask={handleDeleteTask}/>}
        
      </div>

      <Link to="/task2"><BtnLink value="TaskForm"/></Link>
    </>
  )
}
