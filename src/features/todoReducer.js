import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    error: null,
    loading: true
}
export const fetchtasks = createAsyncThunk('tasks/fetch', async (data, thunkAPI) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const users =  await res.json()

        return users
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }    
     
})
const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
        .addCase(fetchtasks.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchtasks.fulfilled, (state, action) => {
            state.loading = false

            state.users = action.payload
        })
        .addCase(fetchtasks.rejected, (state, action) => {
            state.loading = false

            state.error = action.payload
        })
    }
})

export default todoSlice.reducer