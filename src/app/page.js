'use client'

import { useTasks } from '@/context/TasksContext'
import TaskCard from '@/components/TaskCard'

export default function Home () {
  const { tasks } = useTasks()
  return (
    <div className='w-full flex gap-5 lg:gap-10 justify-center flex-wrap'>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      {tasks.length === 0 && <span>No hay tareas para mostrar</span>}
    </div>
  )
}
