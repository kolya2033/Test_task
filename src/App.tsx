import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Board from './components/board/Board';
import Spinner from './components/Spinner';
import TicketList from './components/ticketList/TicketList';
import { useTypedSelector } from './hooks/useTypedSelector';
import { ITicketListMod, ITodosAction } from './modals';
import { selectTickets } from './store/actionCreators/selectTicket';
import { fetchTodos } from './store/actionCreators/todos';
import { fetchUsers } from './store/actionCreators/users';
import './App.scss';

const  App: React.FC = () => {

  let {todos, todosError, todosLoading} = useTypedSelector(state => state.todos)
  const {usersError, usersLoading} = useTypedSelector(state => state.users)
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchUsers())
  }, [])

  const sortTicketList = (array: ITicketListMod[]) => {
    return array.sort((a, b) => {
    return  Number(a.completed) - Number(b.completed) || Number(a.progress) - Number(b.progress)
    })
}

  const selectTicket = (id: number) => {
      const arr: ITicketListMod[] = [...todos];
      const item: ITicketListMod | undefined = arr.find(item => item.id === id)

      if(item) { 
          item.completed = true;
          item.progress = false;
          const sortArray: ITicketListMod[] =  sortTicketList(arr);
          dispatch(selectTickets(sortArray))
      }
  }
  
  if (todosLoading || usersLoading) {
      return <Spinner/>
  }

  if (todosError || usersError) {
      return <h1 className='title'>{todosError || usersError}</h1>
  }
  
  return (
    <div className='App'>
      <TicketList selectTicket={selectTicket}/>
      <Board selectTicket={selectTicket}/>
    </div>
  );
}

export default App;
