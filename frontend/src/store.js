import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'user',
    initialState: {
        username: '',
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
        },
        logout: (state, action) => {
            state.username = '';
        },
    }
});

export const { login, logout } = slice.actions;

export const store = configureStore({
    reducer: {
        user: slice.reducer
    }
});