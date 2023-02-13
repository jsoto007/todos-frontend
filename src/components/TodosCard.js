import React from 'react';


function TododsCard( { item } ) {

    console.log(item)
    return (
        <div>
            <ul>
                <li>{item.name}</li>
            </ul>
        </div>
    )

}


export default TododsCard;