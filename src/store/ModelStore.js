const { create } = require('zustand')

export const useModelStore = create(set =>
  ({
    models: [],
    addModel: model => set(state => ({ models: [...state.models, model] })),
    removeAllModels: () => set({ models: [] })
  })
)
