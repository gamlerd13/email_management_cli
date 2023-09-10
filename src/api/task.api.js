import axios from 'axios';


const TASK_API = "http://localhost:8000/tasks/api/v1/tasks/"
// const FAKE_API = "https://api.escuelajs.co/api/v1/products"

// Get all task
export const getAllTasks = () => {
    return axios({
        method: 'GET',
        url: TASK_API,
        responseType: 'json',
    })
}

//Create a new task
export const createTask = (task) => {
    return axios({
        method: 'POST',
        url: TASK_API,
        data: task
    }).then((res)=>{
        return res
    }).catch((err) => {return err})
}

// Delete a task
export const deleteTask = (task_id) => {
    return axios({
        method: 'DELETE',
        url: `${TASK_API}${task_id}`

    })
}

// update task
