import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { formsValues, usersSet, usersValues } from "../../../store/idbStore";


const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
        activeForm: 'accaunt',
        formLoadingStatus: 'idle',
        usersLoadingStatus: 'idle',
        editingUser: {},
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
        },
        onUserEdit: (state, action) => {
            state.editingUser = action.payload;
        },
        updateUser: (state, action) => {
            usersAdapter.setOne(state, action.payload)
        }

        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllFormsValues.pending, state => {state.formLoadingStatus = 'loading'})
            .addCase(getAllFormsValues.fulfilled, (state, action) => {
                state.formLoadingStatus = 'idle';
                usersAdapter.setOne(state, createUser(action.payload));
                usersSet(action.payload[0].id, createUser(action.payload))
            })
            .addCase(getAllFormsValues.rejected, state => {state.formLoadingStatus = 'error'})
            .addCase(getAllUsers.pending, state => {state.usersLoadingStatus = 'loading'})
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.usersLoadingStatus = 'idle';
                usersAdapter.addMany(state, action.payload);
            })
            .addCase(getAllUsers.rejected, state => {state.usersLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const createUser = (formsData) => {
    let user = {lastUpdate: new Date()}
    formsData.forEach(form => user = {...user, ...form})
    return user;
}

export const onLastUpdate = (user) => {
    const lastUpdateTimeUser = {...user}
    lastUpdateTimeUser.lastUpdate = new Date();
    return lastUpdateTimeUser;
}

const {actions} = userSlice;

export default userSlice.reducer;

export const {selectAll} = usersAdapter.getSelectors(state => state.users);

export const {
                changeActiveForm, 
                onUserEdit,
                updateUser,
            } = actions;

