import { ITask } from "..";
import Task from "./Task";

const TaskDisplay = ({ tasks, handleDelete, handleOpenEdit, handleCompleteTask }: { tasks: ITask[], handleDelete: Function, handleOpenEdit: Function, handleCompleteTask: Function }) => {
  

  return (
    <div className=" flex flex-col rounded w-8/12 p-4 bg-slate-900 mx-auto my-10 ">
      { tasks && tasks.map((task) => (
        <Task key={task.id} task={task} handleDelete={handleDelete} handleCompleteTask={handleCompleteTask} handleOpenEdit={handleOpenEdit}/>
      ))}
    </div>
  )
}


export default TaskDisplay