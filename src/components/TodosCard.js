import React from 'react';
import TasksCard from './TasksCard';

function TododsCard( { item, data, onDeleteItem, onDeleteTask } ) {
    const {id, name, tasks} = item

    function handleDeleteClick() {
        fetch(`http://localhost:9292/categories/${id}`,
        {
            method: "DELETE",
        })
        
        onDeleteItem(id);
    }

    return (
        <div>
            <ul>
                <li>{name} 
                
                <button onClick={handleDeleteClick}>
                    <span 
                  area-aria-labelledby="Delete"
                  role="img">
                  🗑️
                  </span>
                </button>
                </li>
                {tasks.map((item) =>{
                    return (
                        <TasksCard item={item} onDeleteTask={onDeleteTask} />
                    )
                } )}

               
            </ul>
        </div>
    )

}


export default TododsCard;