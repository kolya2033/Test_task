import { FC } from "react";
import {BoardType} from '../../enums'
import './BoardItem.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface BoaderItemProps {
    selectTicket: (id: number) => void,
    type: BoardType
}
 
const BoardItem: FC<BoaderItemProps> = ({selectTicket, type}) => {

    const {todos} = useTypedSelector(state => state.todos)
    const {users} = useTypedSelector(state => state.users)


    return ( 
        <div className='board_item'>
            <h2>{type}</h2>
            <ul className="list_group">
                {todos.map(ticket => {
                    if (type === BoardType.Todo ? (!ticket.completed && !ticket.progress) : type === BoardType.InProgress ? ticket.progress : type === BoardType.Done ? (ticket.completed && !ticket.progress) : true) {
                        return (
                            users.map(user => {
                                if (user.id === ticket.userId) {
                                    const name: string = user.name.split(/\s+/).map((w,i) => w.length < 3 || w.includes('.') ? null : w.substring(0,1).toUpperCase()).join('');
                                    return (
                                        <li onClick={() => selectTicket(ticket.id)} key={ticket.id} className="list_group_item">
                                            <div style={{backgroundColor: `rgb(${user.red},${user.green},${user.blue})`}}>{name}</div>
                                            <h3>{ticket.title.length < 50? ticket.title : `${ticket.title.slice(0, 50)} ...`}</h3>
                                        </li>
                                    )
                                }
                                
                            })
                        )
                    }
                    return
                })}
            </ul>
        </div>
    );
}
 
export default BoardItem;