'use client'

import { useModelStore } from '@/store/ModelStore'

export default function RemoveButton () {
  const { removeAllModels } = useModelStore()

  const handleRemove = () => {
    removeAllModels()
  }

  return (
    <button type='button' className='p-4 bg-red-500 text-white hover:bg-red-600' onClick={handleRemove}>
      Remove all
    </button>
  )
}
