import {createStore} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counter from './reducers/counter'

const config = {
  key: 'root',
  storage
}

export default createStore(
  persistReducer(
    config,
    counter
  )
)