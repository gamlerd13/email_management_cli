import PropTypes from "prop-types";

export const TableTask = ({datos}) => {
  return (
    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Desripción</th>
            <th scope="col" className="px-6 py-3">Done</th>
        </tr>
        </thead>
        <tbody>
            {
            datos.map((task,i)=> (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{task.id}</th>
                    <th>{task.title}</th>
                    <th>{task.description}</th>
                    <th>{task.done? "true": "false"}</th>
                </tr>
                ))
            }
        </tbody>
    </table>
  )
}
TableTask.propTypes = {
  datos: PropTypes.arrayOf(
    PropTypes.shape({
      // done: PropTypes.bool.isRequired, // Asegúrate de requerirlo si es necesario
      // Otros campos del objeto
    })
  ),
};
