import { TrashIcon } from './TrashIcon'

export const Task = ({ task, toggleTaskComplete, deleteTask }) => {
  return (
    <div className='flex items-center justify-between border-b-2 m-2'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          className='mr-2'
          checked={task.isComplete}
          onChange={() => toggleTaskComplete(task.id)}
        />
        <span
          className={`text-sm font-medium ${
            task.isComplete ? 'line-through' : ''
          }`}
        >
          {task.desc}
        </span>
      </div>
      <TrashIcon
        size={24}
        className='cursor-pointer'
        onClick={() => deleteTask(task.id)}
      />
    </div>
  )
}
