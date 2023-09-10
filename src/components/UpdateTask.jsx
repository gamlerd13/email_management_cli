// ESte falta, esta incorrecto, es copiado
import PropTypes from 'prop-types'
export const UpdateTask = ({task}) => {
  return (
    <div>
    {/* <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        <div className="bg-blue-500 p-1 m-2 rounded">
          <input
            type="text"
            id="title"
            // value={onChangeTitle}
            // onChange={(e) => setOnchangeTitle(e.target.value)}
            placeholder="Digit Title"
            {...register("title", {required: true})}
          />
          {errors.title && <span>This field es required</span>}
        </div>
        <div className="bg-blue-500 p-1 m-2 rounded">
          <textarea
            id="description"
            // value={onChangeDes}
            // onChange={(e) => setOnchangeDes(e.target.value)}
            placeholder="Digit Description"
            {...register("description", {required: true})}
          />
        </div>
          {errors.description && <span>This field es required</span>}

        <button type="submit" className="bg-blue-500 text-white p-4 m-2 rounded">create</button>
      </form> */}
    </div>
  )
}

UpdateTask.propTypes = {
    task: PropTypes.object.isRequired
}