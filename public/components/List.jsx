import React from 'react';
import Task from './Task.jsx';

import '../css/base.css';
import '../css/index.css';

const urlTask = "http://localhost:3000/task";

export default class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tasks: [],
          };
        this.reloadList=this.reloadList;
        this.removeTask=this.removeTask;
    }

    reloadList(){
        this.loadTasks();
    }

    removeTask(id){
        this.removeData(id);
    }

    removeData(id){
        fetch(`${urlTask}/${id}`, {
            method: 'DELETE',
            headers: { 
              'Accept': 'application/json',
              'Content-Type':'application/json' },
          });
    }  

    loadTasks(){
        fetch(urlTask)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              error: null,
              isLoaded: true,
              tasks: result
            });
          },
        )
    }

    componentDidMount() {
       this.loadTasks();
    }

    newTask(event){
        if(event.key === 'Enter'){
            this.saveTask({title: event.target.value, completed: false});
            event.target.value = "";
        }
    };

    saveTask(data){
        fetch(urlTask, {
            method: 'POST',
            headers: { 
              'Accept': 'application/json',
              'Content-Type':'application/json' },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(result => {this.reloadList()});
    } 
    
    removeData(id){
        fetch(`${urlTask}/${id}`, {
            method: 'DELETE',
            headers: { 
              'Accept': 'application/json',
              'Content-Type':'application/json' },
          })
          .then(() => this.reloadList());
    }  

    render(){
        return( 
            <div>
                <div className="header">
                    <h1>todos</h1>
                    <input type="text" className="new-todo" onKeyPress={event => this.newTask(event)} placeholder="What needs to be done?"/>
                </div>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox"/>
                    <label>Mark all as complete</label>
                        <ul className="todo-list">
                            {this.state.tasks.map((task, i) => (
                                <Task key={i} task={task} reloadList={() => this.reloadList()} removeTask={() => this.removeTask(task._id)} />
                            ))}
                        </ul>
                </section>
            </div>
        )
    }
}
