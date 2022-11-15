import React from "react";
import './GoalList.css' 
import Goals from "./Goals";

const GoalList = props =>{
    console.log(props)
    return(
        <div className="goal_list">
            {props.item.map(each=> <Goals key={each.id} name={each.name}/>)}
        </div>
    )
}
export default GoalList;