import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addComodity: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

export const { addComodity } = formReducer.actions
export default formReducer.reducer
