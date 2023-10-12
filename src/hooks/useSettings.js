import { useSettingsStore } from '@/store/SettingsStore'

export default function useSettings () {
  const { setSettings } = useSettingsStore()

  const saveSettings = (data) => {
    const folderModel = data.get('folderModel')
    const folderModelModule = data.get('folderModelModule')
    const folderViews = data.get('folderViews')
    const folderViewsModule = data.get('folderViewsModule')

    const settingsLocal = {
      folderModel,
      folderModelModule,
      folderViews,
      folderViewsModule
    }

    setSettings(settingsLocal)
    updateLocalStorageSettings(settingsLocal)
  }

  const updateLocalStorageSettings = settings => {
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  return { saveSettings, updateLocalStorageSettings }
}
