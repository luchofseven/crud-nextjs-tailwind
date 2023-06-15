'use client'

import { useTasks } from '@/context/TasksContext'
import TaskCard from '@/components/TaskCard'
import Link from 'next/link'

export default function Home () {
  const { tasks } = useTasks()
  return (
    <div className='w-full flex gap-5 lg:gap-10 justify-center flex-wrap'>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      {tasks.length === 0 && (
        <Link href='/new'>
          <h2 className='bg-green-500 text-2xl text-center lg:hover:bg-green-400 transition ease-in-out lg:hover:scale-105 px-5 py-2 lg:px-8 lg:py-4 text-gray-50 lg:hover:text-gray-800 font-bold rounded-full inline-flex'>Añade tu primer tarea</h2>
        </Link>)}
    </div>
  )
}
