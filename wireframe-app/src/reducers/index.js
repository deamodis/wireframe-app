import { combineReducers } from 'redux'
import clients from './clients'
import filter from './filter'

export default combineReducers(
    {clients,
        filter});


