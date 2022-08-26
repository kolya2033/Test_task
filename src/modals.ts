export interface ITicketList {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface ITicketListMod {
    userId: number
    id: number
    title: string
    completed: boolean
    progress: boolean
}

export interface IUserList {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }   
    red: number
    green: number
    blue: number
}


export interface ITodosState {
  todos: ITicketListMod[];
  todosLoading: boolean;
  todosError: null | string;
}

export interface IUsersState {
  users: IUserList[];
  usersLoading: boolean;
  usersError: null | string;
}

export enum TodosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  FETCH_TODOS_SELECT = 'FETCH_TODOS_SELECT'
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface IFetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS;
}

interface IFetchTodosSuccessAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: ITicketListMod[]
}

interface IFetchTodosSelectAction {
  type: TodosActionTypes.FETCH_TODOS_SELECT;
  payload: ITicketListMod[]
}

interface IFetchTodosErrorAction {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string
}

interface IFetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: IUserList[]
}

interface IFetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string
}

export type IUsersAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction
export type ITodosAction = IFetchTodosAction | IFetchTodosSuccessAction | IFetchTodosErrorAction | IFetchTodosSelectAction