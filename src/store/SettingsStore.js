'use client'

const { create } = require('zustand')

export const useSettingsStore = create(set => {
  const settingsStorage = window !== 'undefined' ? localStorage.getItem('settings') : null
  const initialSettings = settingsStorage
    ? JSON.parse(settingsStorage)
    : {
      folderModel: 'app',
      folderModelModule: 'app\\modules',
      folderViews: '@app/views',
      folderViewsModule: '@app/modules'
    }

  return {
    settings: initialSettings,
    setSettings: settings => set(state => (state.settings = settings))
  }
})
