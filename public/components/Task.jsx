import React from 'react';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {task: props.task}
    }

    componentWillReceiveProps(props){
        this.setState({task: props.task})
    }

    removeTask(id){
        this.props.reloadList();
        this.removeData(id);
    }

    removeData(id){
        fetch(`http://localhost:3000/task/${id}`, {
            method: 'DELETE',
            headers: { 
              'Accept': 'application/json',
              'Content-Type':'application/json' },
          });
    }  

    render(){
        return(
            <li data-id={this.state.task._id} className="">
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>{this.state.task.title}</label>
                            <button className="destroy" onClick={() => this.removeTask(this.state.task._id)}></button>
                        </div>
                        <input className="edit"/>
             </li> 
        )
    }
}

export default Task;