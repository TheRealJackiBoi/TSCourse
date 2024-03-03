import { useState } from 'react'
import { ITask } from '.'
import TaskDisplay from './components/TaskDisplay'
import TaskInput from './components/TaskInput'
import EditTaskModal from './components/EditTaskModal'
import taskManager from './taskManager'
import { taskObserver } from '.'


function App() {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null)

   
  const [updates, setUpdates] = useState<number>(0)

  const observer = new taskObserver(() => {
    setUpdates(updates + 1)
  })

  taskManager.subscribe(observer)
  

  const handleOpenEdit = (task: ITask) => {
    setSelectedTask(task)
    setIsEditModalOpen(true)
  }

  const handleCloseEdit = () => {
    setIsEditModalOpen(false)
  }

  return (
    <div className="text-white text-center bg-neutral-900 w-screen h-screen">
      <h1 className=' text-4xl'>Task Manager</h1>
      <TaskInput addTask={taskManager.addTask} />
      <div>
        <h2 className='text-2xl'>Tasks</h2>
        <TaskDisplay tasks={taskManager.getTasks()} handleDelete={taskManager.handleDelete} handleOpenEdit={handleOpenEdit} handleCompleteTask={taskManager.completeTask}/>
      </div>
      <EditTaskModal isOpen={isEditModalOpen} onClose={handleCloseEdit} task={selectedTask} handleEditTask={taskManager.editTask} />
    </div>
  )
}

export default App
