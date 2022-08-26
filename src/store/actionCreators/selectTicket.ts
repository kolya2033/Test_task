import { Dispatch } from "redux"
import { ITicketListMod, ITodosAction, TodosActionTypes } from "../../modals"



export const selectTickets = (arr: ITicketListMod[]) => {
    return (dispatch: Dispatch<ITodosAction>) => {
        dispatch({type: TodosActionTypes.FETCH_TODOS_SELECT, payload: arr})
    }
}