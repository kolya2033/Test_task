import { IUsersAction, IUsersState, UsersActionTypes } from "../../modals"

const initialState: IUsersState = {
    users: [],
    usersLoading: false,
    usersError: null
}

export const usersReducer = (state: IUsersState = initialState, action: IUsersAction): IUsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {usersLoading: true, usersError: null, users: []};
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {usersLoading: false, usersError: null, users: action.payload};
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {usersLoading: false, usersError: action.payload, users: []};
        default:
            return state
    }
}