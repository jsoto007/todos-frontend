import React, {useEffect, useState} from "react";
import TodosContainer from "./TodosContainer";

function App() {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/categories')
    .then(resp => resp.json())
    .then(item => setData(item))
  }, [])

  return (
    <div className="App">
      <TodosContainer data={data} />
    </div>
  );
}

export default App;
