import React from 'react';

export default class Task extends React.Component {
    constructor(props){
        super(props);

        console.log(props.task.completed);

        this.state = {
            task: props.task,
        }
    }
    
   
    render(){
        return(
            <li data-id={this.state.task._id} className="">
                        <div className="view">
                            <input className="toggle" type="checkbox" onChange={() => this.props.updateTask()} defaultChecked={this.state.task.completed}/>
                            <label>{this.state.task.title}</label>
                            <button className="destroy" onClick={() => this.props.removeTask()}></button>
                        </div>
                <input className="edit"/>
             </li> 
        )
    }
}

