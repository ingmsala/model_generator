'use client'

import { useModelStore } from '@/store/ModelStore'
import Model from './Model'

export default function ModelConteiner () {
  const { models } = useModelStore()

  return (
    <section className='flex gap-3 w-full'>
      <article className='flex flex-col gap-5 '>
        {
          models.length > 0 &&
            models.map((model, index) => (
              <Model key={index} info={model.model} />
            ))
        }
      </article>
      <article className='flex flex-col gap-5 '>
        {
          models.length > 0 &&
            models.map((model, index) => (
              <Model key={index} info={model.crud} />
            ))
        }
      </article>
    </section>
  )
}
