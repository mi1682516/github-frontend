import { persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'

import counter from './reducers/counter'

const config = {key:'root',storage}

const reducers = combineReducers({
  counter : counter.reducers
})

export default configureStore({
  reducer : persistReducer(
    config,reducers
  )
})
