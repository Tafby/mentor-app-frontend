export const FETCH_MENTORS_BEGIN = 'FETCH_MENTORS_BEGIN';
export const FETCH_MENTORS_SUCCESS = 'FETCH_MENTORS_SUCCESS';
export const FETCH_MENTORS_FAILURE = 'FETCH_MENTORS_FAILURE';
export const CREATE_MENTORS_BEGIN = 'CREATE_MENTORS_BEGIN';
export const CREATE_MENTORS_SUCCESS = 'CREATE_MENTORS_SUCCESS';
export const CREATE_MENTORS_FAILURE = 'CREATE_MENTORS_FAILURE';

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
