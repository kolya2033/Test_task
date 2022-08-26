import { ITodosAction, ITodosState, TodosActionTypes } from "../../modals"

const initialState: ITodosState = {
    todos: [],
    todosLoading: false,
    todosError: null
}

export const todosReducer = (state: ITodosState = initialState, action: ITodosAction): ITodosState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return {todosLoading: true, todosError: null, todos: []};
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {todosLoading: false, todosError: null, todos: action.payload};
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return {todosLoading: false, todosError: action.payload, todos: []};
        case TodosActionTypes.FETCH_TODOS_SELECT:
            return {todosLoading: false, todosError: null, todos: action.payload}
        default:
            return state
    }
}