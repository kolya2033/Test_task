import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { usersReducer } from "./usersReducer";


export const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer
})


export type RootState = ReturnType<typeof rootReducer>