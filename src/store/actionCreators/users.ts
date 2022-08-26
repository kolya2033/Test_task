import { Dispatch } from "redux"
import { IUserList, IUsersAction, UsersActionTypes } from "../../modals"
import { getResourse } from "../../services/TodosServices"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const res: IUserList[]= await getResourse('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: res.map(item => ({
                ...item, 
                red: Math.floor(Math.random() * Math.floor(255)),
                green: Math.floor(Math.random() * Math.floor(255)),
                blue: Math.floor(Math.random() * Math.floor(255))
            }))})
        } catch (e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}