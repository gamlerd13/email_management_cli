import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/task"/>}/>
        <Route path="/task" element={<TasksPage />}/>
        <Route path="/task2" element={<TaskFormPage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
