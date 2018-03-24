import React from 'react';
import Task from './Task.jsx';

import '../css/base.css';
import '../css/index.css';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tasks: []
          };
    }

    componentDidMount() {
        fetch("http://localhost:3000/task")
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

    render(){
        return( 
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox"/>
                    <label>Mark all as complete</label>
                        <ul className="todo-list">
                            {this.state.tasks.map((task, i) => (
                                <Task key={i} task={task} />
                            ))}
                        </ul>
                </section>
            
        )
    }
}

export default List;