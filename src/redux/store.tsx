import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice"

const store =  configureStore({
	reducer: {
        user : userReducer, //user will be the main object containing all the reducers and the state
    },
});

export default store

//for Typescript

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch