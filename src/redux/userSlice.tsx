import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
        email: ""
    },
	reducers: {
		addUserDetails: (state:any, action:PayloadAction<any>) => {
            state = action.payload;
		},

	},
});


export const { addUserDetails } = userSlice.actions;

export default userSlice.reducer;