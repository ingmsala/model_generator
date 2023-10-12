'use client'

import useSettings from '@/hooks/useSettings'
import { useSettingsStore } from '@/store/SettingsStore'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function Settings () {
  const { settings } = useSettingsStore()
  const { saveSettings } = useSettings()
  const router = useRouter()

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)
    saveSettings(data)
    toast.success('Settings saved!')
    router.push('/')
  }

  return (
    <main className='flex flex-row items-start justify-between p-24 gap-7 w-full max-w-6xl mx-auto'>
      <div className='flex flex-col gap-5 w-full'>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <p className='text-lg font-normal'>Set the default values for the folders.</p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
        <label className='font-bold w-full' >Folder model
          <input
            id='folderModel'
            name='folderModel'
            className='font-normal w-full p-4 border border-gray-300 rounded-lg'
            defaultValue={settings.folderModel}
          />
        </label>
        <label className='font-bold w-full' >Folder Module model
          <input
            id='folderModelModule'
            name='folderModelModule'
            className='font-normal w-full p-4 border border-gray-300 rounded-lg'
            defaultValue={settings.folderModelModule}
          />
        </label>
        <label className='font-bold w-full' >Folder views
          <input
            id='folderViews'
            name='folderViews'
            className='font-normal w-full p-4 border border-gray-300 rounded-lg'
            defaultValue={settings.folderViews}
          />
        </label>
        <label className='font-bold w-full' >Folder Module views
          <input
            id='folderViewsModule'
            name='folderViewsModule'
            className='font-normal w-full p-4 border border-gray-300 rounded-lg'
            defaultValue={settings.folderViewsModule}
          />
        </label>
        <button type='submit' className='mt-4 p-4  bg-blue-500 text-white w-full hover:bg-blue-600'>
          Save
        </button>
      </form>
    </main>
  )
}
