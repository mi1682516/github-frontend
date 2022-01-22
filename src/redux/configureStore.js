import {persistReducer} from 'reduxjs-toolkit-persist'
import {combineReducers,configureStore} from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage'

import counter from './reducers/counter'

const reducers = combineReducers({
  counter : counter
})

const config = {key : 'root',storage}

export default configureStore({
  reducer : persistReducer(
    config,reducers
  )
})
