import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguratin: (state, action) => {
            state.url = action.payload
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguratin, getGenres } = homeSlice.actions

export default homeSlice.reducer