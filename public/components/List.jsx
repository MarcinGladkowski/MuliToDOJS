import React from 'react';

import '../css/base.css';
import '../css/index.css';

class List extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            
                <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label>Mark all as complete</label>
                <ul className="todo-list">
                    <li data-id="#" className="completed">
                        <div className="view">
                            <input  className="toggle" type="checkbox"/>
                            <label>Tytuł taska</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit"/>
                    </li> 
                </ul>
                </section>
            
        )
    }
}

export default List;