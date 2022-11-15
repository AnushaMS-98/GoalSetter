import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import GoalList from './Components/GoalList';
import GoalForm from './Components/GoalForm';

function App() {

  let goals =[
    {id:1,name : "Do all excercise!"},
    {id:2,name : "Finish the course!"}
]
const [goallist , setGoallist] = useState(goals);
const getGoals = goaldata =>{
  setGoallist((prevState)=>{return[goaldata,...prevState]})
  console.log(goallist)
}

  return (
    <div className="App">
      <GoalForm onAdd ={getGoals}/>
      <GoalList item={goallist}/>
    </div>
  );
}

export default App;
