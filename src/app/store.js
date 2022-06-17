import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Forum/Features/postsSlice";
import usersReducer from  "../components/Forum/Features/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})