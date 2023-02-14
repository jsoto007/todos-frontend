import React from "react";

function TasksCard( { tasks, onDeleteTask, item } ) {

    const {id} = item.id

    function handleDeleteClick() {
        fetch(`http://localhost:9292/tasks/${id}`,
        {
            method: "DELETE",
        })
        
       onDeleteTask(id);
    }

    return (
        <div>
            <ul>
            <li>{item.description}</li>
            <button onClick={handleDeleteClick}> X </button>
            </ul>
        </div>
    )
}

export default TasksCard;