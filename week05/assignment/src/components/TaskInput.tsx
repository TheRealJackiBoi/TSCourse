import { useRef } from "react"


const TaskInput = ({ addTask }: { addTask: Function }) => {
  const titleRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  
  return (
      <div className='flex flex-col rounded w-1/3 p-4 bg-slate-900 mx-auto my-10'>
        <h2 className='text-2xl'>Add Task</h2>
          <input ref={titleRef} className='rounded text-gray-700 px-2 py-1 mt-2' type="text" placeholder="Task Title" />
          <input ref={descriptionRef} className='rounded text-gray-700 px-2 py-1 mt-2' type="text" placeholder="Task Description" />
        <button 
          className=" bg-blue-600 py-2  w-4/12 rounded mx-auto mt-8 text-white" 
          onClick={() => {
            if (titleRef.current!.value === '' || descriptionRef.current!.value === '') return
            addTask({ title: titleRef.current!.value, description: descriptionRef.current!.value })
            titleRef.current!.value = ''
            descriptionRef.current!.value = ''
          }}>Add Task</button>
      </div>
  )
  }

export default TaskInput