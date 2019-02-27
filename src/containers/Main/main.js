import React from 'react';




const Main = (props) => {
    if(props.todo){
        return(
            <div>{props.todo ? props.todo.title : 'Not found'}</div>

        )
    }
    else{
        return(
            <div>Loading...</div>

        )

    }
}

// const Main = (props) => console.log(props);

export default Main;