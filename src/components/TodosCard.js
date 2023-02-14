import React from 'react';


function TododsCard( { item, data, onDeleteItem } ) {
    const {id, name, tasks, updated_at} = item

    function handleDeleteClick() {
        fetch(`http://localhost:9292/categories/${id}`,
        {
            method: "DELETE",
        })
        
        onDeleteItem(id);
    }

    return (
        <div key={id}>
            <ul>
                <li>{name}</li>
                {tasks.map((item) => <li>{item.description}</li>)}
                <button onClick={handleDeleteClick}>
                <span 
                  area-aria-labelledby="Delete"
                  role="img">
                  🗑️
                  </span>
                </button>
            </ul>
        </div>
    )

}


export default TododsCard;