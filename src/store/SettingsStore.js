'use client'

const { create } = require('zustand')

export const useSettingsStore = create(set => {
  if (typeof localStorage !== 'undefined') {
    const settingsStorage = localStorage.getItem('settings')
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
  } else {
    // Manejar el caso en el que localStorage no está disponible, por ejemplo, utilizando un valor predeterminado.
    const initialSettings = {
      folderModel: 'app',
      folderModelModule: 'app\\modules',
      folderViews: '@app/views',
      folderViewsModule: '@app/modules'
    }

    return {
      settings: initialSettings,
      setSettings: settings => set(state => (state.settings = settings))
    }
  }
})
