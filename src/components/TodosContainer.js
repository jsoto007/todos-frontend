import React from "react";
import TododsCard from "./TodosCard";

function TodosContainer ( { data, setData } ) {

    function handleDeleteItem(id) {
        const updatedItems = data.filter((item) => item.id !== id)
        setData(updatedItems)
    }

    function handleDeleteTask(id) {
       const task = data.tasks
        const updatedItems = task.filter((item) => item.id !== id)
        setData(updatedItems)
    }

    return (
        <div>
            {data.map((item) => {
                return (
                    <TododsCard 
                        onDeleteItem={handleDeleteItem}
                        onDeleteTask={handleDeleteTask}
                        key={item.id}
                        item={item}
                    />
                )
            })}
        </div>
    )

}

export default TodosContainer;