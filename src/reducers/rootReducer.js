import { combineReducers } from 'redux';
import { main } from './main';

const combineStore = combineReducers({ main });

export default combineStore;
