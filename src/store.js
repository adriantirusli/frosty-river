import { configureStore } from '@reduxjs/toolkit'
import formReducer from './features/create/state/formReducer'

export const store = configureStore({
  reducer: { form: formReducer },
})
