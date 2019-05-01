import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mentorReducer from './mentorReducer';
import createMentorReducer from './createMentorReducer';
import updateReducer from './updateReducer';
import mentorshipsReducer from './mentorshipsReducer';
import updateMentorshipStatusReducer from './updateMentorshipStatusReducer';
import userReducer from './userReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	mentor: mentorReducer,
	createMentor: createMentorReducer,
	update: updateReducer,
	mentorships: mentorshipsReducer,
	updateMentorships: updateMentorshipStatusReducer,
	userReducer: userReducer,
	categories: categoriesReducer
});

export default rootReducer;
