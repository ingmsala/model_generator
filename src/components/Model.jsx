import { useState } from 'react'
import { toast } from 'sonner'

export default function Model ({ info }) {
  const [color, setColor] = useState('bg-gray-200 text-gray-800 hover:bg-gray-300')

  const copyCode = () => {
    navigator.clipboard
      .writeText(info)
      .then(() => {
        toast.success('Copied!')
        setColor('bg-emerald-500 text-white hover:bg-emerald-600')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  return (
    <button onClick={copyCode} type='button' className={`flex flex-col h-36 gap-2 p-4 rounded ${color}`}>
      <div className='text-sm'>{info}</div>
    </button>
  )
}
