import React from "react";
import TododsCard from "./TodosCard";

function TodosContainer ( { data } ) {
    return (
        <div>
            {data.map((item) => {
                return (
                    <TododsCard 
                        key={item.id}
                        item={item}
                    />
                )
            })}
        </div>
    )

}

export default TodosContainer;