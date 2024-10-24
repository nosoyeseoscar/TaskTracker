import TaskInput from '@/components/TaskInput'
import TaskList from '@/components/TaskList'
import { Task } from '@/components/Task'
import { useState } from 'react'

export default function Home () {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      desc: 'Take readings froms printers counters.',
      isComplete: false
    },
    { id: 2, desc: 'Backup weekly information.', isComplete: false }
  ])

  const toggleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const sortedTasks = (tasks) => {
    return tasks.toSorted((a, b) => b.id - a.id)
  }

  return (
    <main className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <div className='container border border-slate-300 rounded-xl p-4 max-w-2xl'>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        {tasks.length
          ? (
            <TaskList>
              {sortedTasks(tasks).map((task) => (
                <Task
                  task={task}
                  key={task.id}
                  toggleTaskComplete={toggleTaskComplete}
                  deleteTask={deleteTask}
                />
              ))}
            </TaskList>
            )
          : (
            <p className='text-slate-300 font-bold'>
              There are no tasks to perform, add one to start.
            </p>
            )}
      </div>
    </main>
  )
}
