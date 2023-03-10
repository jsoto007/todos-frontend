import React, {useEffect, useState} from "react";
import NewTaskForm from "./NewTaskForm";
import TodosContainer from "./TodosContainer";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/categories')
    .then(resp => resp.json())
    .then(item => setData(item))
  }, [])


  function handleAddItem(newItem) {
   setData([...data, newItem]);
  }
console.log(data,"data")
  return (
    <div className="App">
      <NewTaskForm onAddTask={handleAddItem} />
      <TodosContainer data={data} setData={setData} />
    </div>
  );
}

export default App;
