import {createSlice} from '@reduxjs/toolkit'

const counter = createSlice({
  name : 'counter',
  initialState : {
    value : {
      v : 0
    }
  },
  reducers : {
    increment : (state) => {
      state.value.v++
    }
  }
})