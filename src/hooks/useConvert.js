import { useModelStore } from '@/store/ModelStore'
import { useSettingsStore } from '@/store/SettingsStore'

export default function useConvert () {
  const { addModel } = useModelStore()
  const { settings } = useSettingsStore()

  const setCards = (data) => {
    const sqlcode = data.get('sqlcode')
    const moduleName = data.get('moduleName')

    const lines = sqlcode.split('\n')
    const resultados = []

    if (lines.length === 1) {
      resultados.push(sqlcode)
    } else {
      lines.forEach(line => {
        if (line.includes('CREATE TABLE IF NOT EXISTS')) {
          const tableComillas = line.match(/CREATE TABLE IF NOT EXISTS\s+(\S+)/)[1]
            .replace(/`/g, '')
            .replaceAll('(', '')
          resultados.push(tableComillas)
        } else if (line.includes('CREATE TABLE')) {
          const tableComillas = line.match(/CREATE TABLE\s+(\S+)/)[1].replace(/`/g, '').replaceAll('(', '')
          resultados.push(tableComillas)
        }
      })
    }

    const folderModel = (moduleName === '') ? settings.folderModel : `${settings.folderModelModule}\\${moduleName}`
    const folderView = (moduleName === '') ? settings.folderViews : `${settings.folderViewsModule}/${moduleName}/views`

    resultados.forEach(result => {
      const tableNameCapitalized = result.charAt(0).toUpperCase() + result.slice(1)
      const modelCreate = `php yii gii/model 
      --tableName="${result}" 
      --modelClass="${tableNameCapitalized}" 
      --ns="${folderModel}\\models" 
      --interactive=0; `
      const crudCreate = `php yii gii/crud  
      --modelClass="${folderModel}\\models\\${tableNameCapitalized}" 
      --controllerClass="${folderModel}\\controllers\\${tableNameCapitalized}Controller" 
      --viewPath="${folderView}/${result}" 
      --searchModelClass="${folderModel}\\models\\${tableNameCapitalized}Search" 
      --template="crud" 
      --interactive=0; `
      addModel({ model: modelCreate, crud: crudCreate })
    })
  }

  return { setCards }
}
