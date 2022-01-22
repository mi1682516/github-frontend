import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: {
    value: {
      v: 0
    }
  },
  reducers: {}
})

export default counter