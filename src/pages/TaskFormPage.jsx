import { Link } from "react-router-dom"
import { BtnLink } from "../components/BtnLink"

export const TaskFormPage = () => {
  return (
    <>

    <div>TaskFormPage</div>

    <form>
        <input type="text" id="title" placeholder="Digite Titulo"/>Título
        <hr />
        <input type="text" id="description" placeholder="Digite Descripcion"/>Descripción
    </form>
    <Link to="/task"><BtnLink value="Task"/></Link>



    
    </>
  )
}
