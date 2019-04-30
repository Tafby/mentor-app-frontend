import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mentorReducer from './mentorReducer';
import createMentorReducer from './createMentorReducer';
import updateReducer from './updateReducer';
import mentorshipsReducer from './mentorshipsReducer';
import { updateMentorshipStatus } from '../actions/mentorshipActions';

const rootReducer = combineReducers({
	auth: authReducer,
	mentor: mentorReducer,
	createMentor: createMentorReducer,
	update: updateReducer,
	mentorships: mentorshipsReducer,
	updateMentorships: updateMentorshipStatus
});

export default rootReducer;
