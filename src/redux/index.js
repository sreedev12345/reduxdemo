import { combineReducers } from 'redux';
import getButtonReducer from './ButtonReducer';
import getUserReducer from './UserReducer';

export default combineReducers({
	getButtonReducer,
	getUserReducer
})
