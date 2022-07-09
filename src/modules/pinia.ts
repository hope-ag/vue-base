import { createPinia } from 'pinia'

const _pinia = createPinia()

_pinia.use(({ store }) => {
  store.$onAction(({ name, args, onError }) => {
    onError(error => {
      console.log(error)
      //probably forward to API for error handling
    })
  })
})

export const pinia = _pinia