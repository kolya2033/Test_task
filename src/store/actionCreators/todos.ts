import { Dispatch } from "redux"
import { ITicketList, ITodosAction, TodosActionTypes } from "../../modals"
import { getResourse } from "../../services/TodosServices"


export const fetchTodos = () => {
    return async (dispatch: Dispatch<ITodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const res: ITicketList[]= await getResourse('https://jsonplaceholder.typicode.com/todos')
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: res.map(item => {
                return {
                    ...item,
                    progress: Math.floor(Math.random() * 2) ? true : false,
                }
            }).map(item => {
                if (item.progress) {
                    item.completed = false
                    return  item
                } else {
                    return item
                }
            }).sort((a, b) => {
                return  Number(a.completed) - Number(b.completed) || Number(a.progress) - Number(b.progress)
                })})
        } catch (e) {
            dispatch({
                type: TodosActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}