import React from 'react';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {task: props.task}
    }

    componentWillReceiveProps(props){
        this.setState({task: props.task})
    }

    render(){
        return(
            <li data-id="#" className="">
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>{this.state.task.title}</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit"/>
             </li> 
        )
    }
}

export default Task;