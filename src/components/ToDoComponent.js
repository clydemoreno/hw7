import React from 'react';
// import { getTodoItem } from '../redux/todo';
import { NavLink } from 'react-router-dom';

const Todo = ({id, title, getTodoItem,match}) => {
    // console.log("hrere",match.params.id);
    const handleClick = (e)=>{
        

        getTodoItem(id);
        // e.preventDefault();
    }
    // console.log("id is", id);
    return(
        <NavLink className="nav-link" to={'/about/' + id} onClick={handleClick} >
                                        <span className="fa fa-archive">{title} </span>
                                        
                                    </NavLink>


    )
}


export default Todo;

