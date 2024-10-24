import EnterIcon from './EnterIcon'
import { useState } from 'react'

export default function TaskInput ({ tasks, setTasks }) {
  const [inputValue, setInputValue] = useState('')
  const [inputLength, setInputLength] = useState(0)

  const addTask = (desc) => {
    const newTask = { id: Date.now(), desc, isComplete: false }
    setTasks([...tasks, newTask])
  }

  const handleEnterClick = () => {
    addTask(inputValue)
  }

  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Evita que el formulario se recargue al presionar Enter
      addTask(inputValue)
    }
  }

  return (
    <div className='py-2'>
      <h1 className='text-slate-200 text-xl pb-2'>Task Tracker</h1>
      <form>
        <div className='is-relative'>
          <input
            id='task'
            name='task'
            type='text'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setInputLength(inputValue.length)
            }}
            onKeyDown={handleEnterKeyDown}
            className='p-3 rounded mb-2 bg-slate-900 text-slate-300 w-full'
            placeholder='Start writing and press enter to create task'
          />
          {inputLength < 65
            ? (
              <span className='input-icon border rounded-lg'>
                <EnterIcon size='30' onClick={handleEnterClick} />
              </span>
              )
            : (
              <span className='text-xs text-indigo-200'>
                Type Enter for Add Task
              </span>
              )}
        </div>
      </form>
    </div>
  )
}
