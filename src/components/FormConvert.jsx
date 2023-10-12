'use client'

import useConvert from '@/hooks/useConvert'
import RemoveButton from './RemoveButton'
import { useState } from 'react'

export default function FormConvert () {
  const [errors, setErrors] = useState({})

  const { setCards } = useConvert()

  function validateForm (data) {
    const sqlcode = data.get('sqlcode')
    const errorsForm = {}
    if (sqlcode === '') {
      errorsForm.sqlcode = 'Required'
    }
    setErrors(errorsForm)
    return errorsForm
  }

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)

    const errorsForm = validateForm(data)
    if (Object.keys(errorsForm).length) {
      return
    }

    setCards(data)
  }

  return (
    <div className='flex flex-col gap-5 w-full min-w-max'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
        <label className={`font-bold w-full ${errors.sqlcode ? 'text-red-500' : ''}`} >
          <span className='flex gap-3 items-center'>
            Model name or MySQL Code
            {
              errors.sqlcode && <span className='text-red-500 text-xs italic'>* {errors.sqlcode}</span>
            }
          </span>
          <textarea
            onBeforeInput={() => setErrors({})}
            id='sqlcode'
            name='sqlcode'
            className={`font-normal h-96 w-full border border-gray-300 rounded-lg 
              ${errors.sqlcode ? 'border-red-500' : ''}`}
          />
        </label>
        <label
          className='font-bold w-full' >
            Module name
          <span className='text-xs text-gray-400'>(empty for no module)</span>
          <input
            id='moduleName'
            name='moduleName'
            className='font-normal w-full p-4 border border-gray-300 rounded-lg'
          />
        </label>
        <button type='submit' className='mt-4 p-4 bg-blue-500 hover:bg-blue-600 text-white w-full'>
          Submit
        </button>
      </form>
      <RemoveButton />

    </div>
  )
}
