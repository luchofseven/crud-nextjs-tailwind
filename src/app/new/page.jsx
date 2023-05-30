'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export default function New ({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
      toast.success('¡Tarea actualizada correctamente!')
    } else {
      createTask(data.title, data.description)
      toast.success('¡Tarea creada correctamente!')
    }

    router.push('/')
  })

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find(task => task.id === params.id)

      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={onSubmit} className='min-h-screen flex flex-col gap-10 items-center'>
      <h2 className='text-2xl font-bold text-green-500 underline'>Nueva tarea</h2>
      <div className='flex flex-col gap-4 items-center'>
        <label htmlFor='title' className='font-bold underline'>
          Título:
        </label>
        <input
          className='min-w-[18rem] lg:min-w-[30rem] p-2 mx-5 text-gray-700 placeholder:font-normal rounded-md'
          id='title'
          {...register('title', { required: true })}
          type='text'
          placeholder='Clase de programación...'
        />
      </div>

      {errors.title && <span className='text-yellow-300'>Este campo es requerido</span>}

      <div className='flex flex-col gap-4 items-center'>
        <label htmlFor='description' className='font-bold underline'>
          Descripción:
        </label>
        <textarea
          className='min-w-[18rem] lg:min-w-[30rem] p-2 text-gray-700 rounded-md resize-none'
          id='description'
          {...register('description', { required: true })}
          cols='30'
          rows='10'
          placeholder='Clase de programación el día martes a las 15hs...'
        />
      </div>

      {errors.description && <span className='text-yellow-300'>Este campo es requerido</span>}

      <button className='bg-green-500 text-gray-50 px-5 py-2 rounded-full transition ease-in-out hover:bg-green-400 lg:hover:text-gray-800 font-bold lg:hover:scale-105'>Guardar</button>
    </form>
  )
}
