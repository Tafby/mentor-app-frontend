import * as types from '../constants/fetchActionTypes';

export const fetchUserSuccess = (user) => ({
	type: types.FETCH_USER_SUCCESS,
	payload: { user }
});

export const fetchUserFailure = (error) => ({
	type: types.FETCH_USER_FAILURE,
	payload: { error }
});

export const fetchMentorsBegin = () => ({
	type: types.FETCH_MENTORS_BEGIN
});

export const fetchMentorsSuccess = (mentors) => ({
	type: types.FETCH_MENTORS_SUCCESS,
	payload: { mentors }
});

export const fetchMentorsFailure = (error) => ({
	type: types.FETCH_MENTORS_FAILURE,
	payload: { error }
});

export const createMentorsBegin = () => ({
	type: types.CREATE_MENTORS_BEGIN
});
export const createMentorsSuccess = () => ({
	type: types.CREATE_MENTORS_SUCCESS
});

export const createMentorsFailure = (error) => ({
	type: types.CREATE_MENTORS_FAILURE,
	payload: { error }
});

export const updateProfileBegin = () => ({
	type: types.UPDATE_PROFILE_BEGIN
});
export const updateProfileSuccess = (userInfo) => ({
	type: types.UPDATE_PROFILE_SUCCESS,
	payload: { userInfo }
});

export const updateProfileFailure = (error) => ({
	type: types.UPDATE_PROFILE_FAILURE,
	payload: { error }
});

export const fetchMentorShipsBegin = () => ({
	type: types.FETCH_MENTORSHIPS_BEGIN
});
export const fetchMentorShipsSuccess = (mentorships) => ({
	type: types.FETCH_MENTORSHIPS_SUCCESS,
	payload: mentorships
});

export const fetchMentorShipsFailure = (error) => ({
	type: types.FETCH_MENTORSHIPS_FAILURE,
	payload: { error }
});

export const requestMentorshipBegin = () => ({
	type: types.REQUEST_MENTORSHIP_BEGIN
});
export const requestMentorshipSuccess = (mentorships) => ({
	type: types.REQUEST_MENTORSHIP_SUCCESS
});

export const requestMentorshipFailure = (error) => ({
	type: types.REQUEST_MENTORSHIP_FAILURE,
	payload: { error }
});

export const updateMentorshipStatusSuccess = (mentorship) => ({
	type: types.UPDATE_MENTORSHIP_STATUS_SUCCESS,
	payload: { mentorship }
});

export const updateMentorshipStatusFailure = (error) => ({
	type: types.UPDATE_MENTORSHIP_STATUS_FAILURE,
	payload: { error }
});
