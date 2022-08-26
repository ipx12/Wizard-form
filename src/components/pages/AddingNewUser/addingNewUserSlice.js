import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { formsValues, usersSet, usersValues } from "../../../store/idbStore";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
        activeForm: 'accaunt',
        formLoadingStatus: 'idle',
        usersLoadingStatus: 'idle',
});

export const getAllFormsValues = createAsyncThunk(
    'users/getAllForms',
    () => {
        return formsValues()
    }
)

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    () => {
        return usersValues()
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeActiveForm: (state, actions) => {
            state.activeForm = actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllFormsValues.pending, state => {state.formLoadingStatus = 'loading'})
            .addCase(getAllFormsValues.fulfilled, (state, action) => {
                state.formLoadingStatus = 'idle';
                usersAdapter.setOne(state, createUser(action.payload));
                usersSet(action.payload[0].userName, createUser(action.payload))
            })
            .addCase(getAllFormsValues.rejected, state => {state.formLoadingStatus = 'error'})
            .addCase(getAllUsers.pending, state => {state.usersLoadingStatus = 'loading'})
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.usersLoadingStatus = 'idle';
                usersAdapter.setAll(state, action.payload);
            })
            .addCase(getAllUsers.rejected, state => {state.usersLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const createUser = (formsData) => {
    let user = {id: formsData[0].userName}
    formsData.forEach(form => user = {...user, ...form})
    return user;
}

const {actions} = userSlice;

export default userSlice.reducer;

export const {selectAll} = usersAdapter.getSelectors(state => state.users)

export const {changeActiveForm} = actions;

