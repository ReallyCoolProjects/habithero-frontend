import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
        email: ""
    },
	reducers: {
		addUserEmail: (state:any, action:PayloadAction<string>) => {
            state.email = action.payload;
		},

	},
});


export const { addUserEmail } = userSlice.actions;

export default userSlice.reducer;