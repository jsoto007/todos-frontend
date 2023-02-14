import React, { useState } from "react";


function NewTaskForm( { onAddTask } ) {
  const [formData, setFormData] = useState({
    name: "",
    description: "", 
    categorization_id: 0
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:9292/tasks', {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
      .then((resp) => resp.json())
      .then((newItem) => {
        onAddTask(newItem)
  
      });
  }

  function handleChange(e) {
    const key = e.target.id
    setFormData({
       ...formData,
       [key]: e.target.value
    })
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            value={formData.description}
            id="description"
            onChange={handleChange}
            placeholder="New task"
          />
             <input
            type="text"
            name="description"
            id="categorization_id"
            value={formData.categorization_id}
            onChange={handleChange}
            placeholder="New task"
          />
          <button type="submit">Add Task</button>
        </form>

      </div>
  )
}

export default NewTaskForm;