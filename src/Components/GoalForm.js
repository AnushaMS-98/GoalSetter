import React, { useState } from "react";


const GoalForm = props =>{
    const [goalName,setGoalName] = useState('');const [isValid, setIsValid] = useState(true);
    const goalchangehandler=event=>{
        setGoalName(event.target.value)
       // console.log(event.target.value)
    }

    const addGoals=event=>{
        event.preventDefault();
        if(goalName.trim().length===0){setIsValid(false)
            return;       
        }
         props.onAdd(goal)
        
        const goal={
         id:Math.random().toString(),
         name : goalName
        }
            
        setGoalName('')
    }
    return(
        <div>
            <form onSubmit={addGoals}>
                <div>
                    <label style={{color:isValid? 'black' :'red'}}>Add Goal</label>
                    <input type='text' onChange={goalchangehandler} value={goalName}/>
                    <div><button type ='submit'>Add Goal</button></div>
                    
                </div>
            </form>
            </div>
    )}
    export default GoalForm;