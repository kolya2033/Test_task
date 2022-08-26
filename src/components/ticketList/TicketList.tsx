import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './TicketList.scss';

interface TicketItemProps {
    selectTicket: (id: number) => void
}

const  TicketList: FC<TicketItemProps> = ({selectTicket}) => {

    const {todos} = useTypedSelector(state => state.todos)
    const {users} = useTypedSelector(state => state.users)

    return (
        <div className='ticket_list'>
            <h2 className='title'>Ticket list</h2>
            <ul className="list_group">
                {todos.map(ticket => {
                    return (
                        users.map(user => {
                            if (user.id === ticket.userId) {
                                const name: string = user.name.split(/\s+/).map((w,i) => w.length < 3 || w.includes('.') ? null : w.substring(0,1).toUpperCase()).join('');
                                return (
                                    <li onClick={() => selectTicket(ticket.id)} key={ticket.id} className="list_group_item">
                                        <div style={{backgroundColor: `rgb(${user.red},${user.green},${user.blue})`}}>{name}</div>
                                        <h3>{ticket.title}</h3>
                                        <h4>{ticket.progress? 'In progress' : ticket.completed ? 'Done' : 'To do'}</h4>
                                    </li>
                                )
                            }
                            
                        })
                    )
                })}
                
            </ul>
        </div>
    );
}

export default TicketList;