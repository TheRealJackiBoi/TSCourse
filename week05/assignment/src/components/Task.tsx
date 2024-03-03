import { ITask } from ".."

const Task = ({ task, handleDelete, handleOpenEdit, handleCompleteTask }: { task: ITask, handleDelete: Function, handleOpenEdit: Function, handleCompleteTask: Function}) => {
  return (
    <div className="flex bg-slate-800 rounded justify-between my-2 ">
      <div className={"flex " + (task.completed ? "line-through" : "") } >
        <h3 className="text-xl text-left m-4 w-20 overflow-x-auto">{task.title}</h3>
        <p className="my-auto text-left mx-2 w-60 overflow-x-auto">{task.description}</p>
        
      </div>
      <div className="flex border-l-2 border-slate-900 h-8 my-auto">
        <button className='px-2 py-1 rounded mx-1' onClick={() => handleCompleteTask(task.id)}>✅</button>
        <button className='px-2 py-1 rounded mx-1' onClick={() => handleOpenEdit(task)}>🪄</button>
        <button className='px-2 py-1 rounded mx-1' onClick={() => handleDelete(task.id)}>❌</button>
      </div>
    </div>
  )
}

export default Task