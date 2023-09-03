import { Navigate } from "react-router-dom"

export const TaskFormPage = () => {
  return (
    <>

    <div>TaskFormPage</div>

    <form>
        <input type="text" id="title" placeholder="Digite Titulo"/>Título
        <hr />
        <input type="text" id="description" placeholder="Digite Descripcion"/>Descripción
    </form>


    </>
  )
}
