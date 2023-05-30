import { useTasks } from '@/context/TasksContext'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function TaskCard ({ task }) {
  const { id, title, description } = task
  const { deleteTask } = useTasks()

  return (
    <div className='bg-gray-800 w-5/6 py-8 lg:mx-5 lg:px-10 lg:py-8 lg:w-3/12 rounded-lg'>
      <div className='flex flex-col w-full items-center text-start break-all px-5 gap-2 lg:px-0'>
        <h1 className='text-2xl font-bold py-2 lg:py-4'>{title}</h1>
        <p className='text-gray-300'>{description}</p>
        <div className='flex flex-col gap-5 items-center justify-evenly w-full mt-10'>
          <button
            className='bg-red-500 text-gray-50 px-5 py-2 font-bold rounded-full transition ease-in-out lg:hover:bg-red-400 lg:hover:scale-105 lg:hover:text-gray-700' onClick={() => {
              const confirm = window.confirm('¿Desea eliminar ésta tarea?')
              if (confirm) {
                deleteTask(id)
                toast.success('¡Tarea eliminada correctamente!')
              }
            }}
          >
            Eliminar
          </button>
          <Link className='bg-green-500 text-gray-50 px-5 py-2 font-bold rounded-full transition ease-in-out lg:hover:bg-green-400 lg:hover:scale-105 lg:hover:text-gray-700' href={`/edit/${id}`}>
            Editar
          </Link>
        </div>
      </div>
    </div>
  )
}
