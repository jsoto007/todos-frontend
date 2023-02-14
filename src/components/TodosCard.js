import React from 'react';


function TododsCard( { item, data, onDeleteItem } ) {
    const {id, name, tasks} = item

    function handleDeleteClick() {
        fetch(`http://localhost:9292/categories/${id}`,
        {
            method: "DELETE",
        })
        .then((resp) => resp.json)
        .then(() => onDeleteItem(data))
    }
    return (
        <div>
            <ul>
                <li>{name}</li>
               
            </ul>
        </div>
    )

}


export default TododsCard;