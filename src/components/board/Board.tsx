import {FC} from 'react';
import BoardItem from '../boardItem/BoardItem';
import {BoardType} from '../../enums'
import './Board.scss'

interface BoardProps {
    selectTicket: (id: number) => void
}

const  Board: FC<BoardProps> = ({selectTicket}) => {
  return (
    <div className='board_list'>
        <h2 className='title'>Board</h2>
        <div className='board_mane'>
            <BoardItem selectTicket={selectTicket} type={BoardType.Todo}/>
            <BoardItem selectTicket={selectTicket} type={BoardType.InProgress}/>   
            <BoardItem selectTicket={selectTicket} type={BoardType.Done}/>
        </div>
        
    </div>
  );
}

export default Board;