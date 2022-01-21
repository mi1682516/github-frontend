import {persistReducer} from 'reduxjs-toolkit-persist'
import {combineReducers,configureStore} from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage'

import counter from './reducers/counter'

export default configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage: storage
    },
    combineReducers({
      user: user.reducers
    })
  )
})