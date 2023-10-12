import FormConvert from '@/components/FormConvert'
import ModelConteiner from '@/components/ModelConteiner'

export default function Home () {
  return (
    <main className='flex md:flex-row flex-col items-start justify-between p-24 gap-7 w-full'>
      <FormConvert />
      <ModelConteiner />
    </main>
  )
}
