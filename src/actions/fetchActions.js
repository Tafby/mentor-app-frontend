export const FETCH_MENTORS_BEGIN = 'FETCH_MENTORS_BEGIN';
export const FETCH_MENTORS_SUCCESS = 'FETCH_MENTORS_SUCCESS';
export const FETCH_MENTORS_FAILURE = 'FETCH_MENTORS_FAILURE';
export const CREATE_MENTORS_BEGIN = 'CREATE_MENTORS_BEGIN';
export const CREATE_MENTORS_SUCCESS = 'CREATE_MENTORS_SUCCESS';
export const CREATE_MENTORS_FAILURE = 'CREATE_MENTORS_FAILURE';
export const UPDATE_PROFILE_BEGIN = 'UPDATE_PROFILE_BEGIN';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const FETCH_MENTORSHIPS_BEGIN = 'FETCH_MENTORSHIPS_BEGIN';
export const FETCH_MENTORSHIPS_SUCCESS = 'FETCH_MENTORSHIPS_SUCCESS';
export const FETCH_MENTORSHIPS_FAILURE = 'FETCH_MENTORSHIPS_FAILURE';
export const REQUEST_MENTORSHIP_BEGIN = 'REQUEST_MENTORSHIP_BEGIN';
export const REQUEST_MENTORSHIP_SUCCESS = 'REQUEST_MENTORSHIP_SUCCESS';
export const REQUEST_MENTORSHIP_FAILURE = 'REQUEST_MENTORSHIP_FAILURE';

export const fetchMentorsBegin = () => ({
	type: FETCH_MENTORS_BEGIN
});

export const fetchMentorsSuccess = (mentors) => ({
	type: FETCH_MENTORS_SUCCESS,
	payload: { mentors }
});

export const fetchMentorsFailure = (error) => ({
	type: FETCH_MENTORS_FAILURE,
	payload: { error }
});

export const createMentorsBegin = () => ({
	type: CREATE_MENTORS_BEGIN
});
export const createMentorsSuccess = () => ({
	type: CREATE_MENTORS_SUCCESS
});

export const createMentorsFailure = (error) => ({
	type: CREATE_MENTORS_FAILURE,
	payload: { error }
});

export const updateProfileBegin = () => ({
	type: UPDATE_PROFILE_BEGIN
});
export const updateProfileSuccess = (userInfo) => ({
	type: UPDATE_PROFILE_SUCCESS,
	payload: { userInfo }
});

export const updateProfileFailure = (error) => ({
	type: UPDATE_PROFILE_FAILURE,
	payload: { error }
});

export const fetchMentorShipsBegin = () => ({
	type: FETCH_MENTORSHIPS_BEGIN
});
export const fetchMentorShipsSuccess = (mentorships) => ({
	type: FETCH_MENTORSHIPS_SUCCESS,
	payload: mentorships
});

export const fetchMentorShipsFailure = (error) => ({
	type: FETCH_MENTORSHIPS_FAILURE,
	payload: { error }
});

export const requestMentorshipBegin = () => ({
	type: REQUEST_MENTORSHIP_BEGIN
});
export const requestMentorshipSuccess = (mentorships) => ({
	type: REQUEST_MENTORSHIP_SUCCESS
});

export const requestMentorshipFailure = (error) => ({
	type: REQUEST_MENTORSHIP_FAILURE,
	payload: { error }
});

export const updateMentorshipStatusSuccess = (mentorships) => ({
	type: UPDATE_MENTORSHI_STATUS_SUCCESS
});

export const updateMentorshipStatusFailure = (error) => ({
	type: UPDATE_MENTORSHI_STATUS_FAILURE,
	payload: { error }
});
