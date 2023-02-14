import React from 'react';


function TododsCard( { item } ) {
    const {id, name, tasks} = item
    console.log(tasks)
    return (
        <div>
            <ul>
                <li>{name}</li>
               
            </ul>
        </div>
    )

}


export default TododsCard;