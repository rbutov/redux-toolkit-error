import { combineReducers } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async () => {
	return await new Promise(resolve => resolve([] as any));
});

export interface UserState {
	value: [] | null;
	loading: boolean;
	error: string;
}

const initialState: UserState = {
	value: null,
	loading: true,
	error: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[login.fulfilled.type]: (state, action) => {
			state.value = action.payload;
			state.loading = false;
			state.error = '';
		},
		[login.pending.type]: (state) => {
			state.loading = true;
		},
		[login.rejected.type]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
	},
});

export const userReducer = userSlice.reducer;

const combinedReducer = combineReducers({
	user: userReducer,
});

const rootReducer = (state: any, action: any) => {
	return combinedReducer(state, action);
};

export { rootReducer };
