import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mentorReducer from './mentorReducer';
import createMentorReducer from './createMentorReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	mentor: mentorReducer,
	createMentor: createMentorReducer
});

export default rootReducer;
