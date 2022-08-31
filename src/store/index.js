import { configureStore } from "@reduxjs/toolkit";
import users from '../components/pages/AddingNewUser/addingNewUserSlice';


const store = configureStore({
    reducer: {users},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['users/getAllUsers/fulfilled',
                            'users/getAllForms/fulfilled', 
                            'users/onUserEdit',
                            'users/updateUser'],
            ignoredPaths: ['users.entities', 'users.editingUser'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;