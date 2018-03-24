import React from 'react';


class Header extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    newTask(event){
        if(event.key === 'Enter'){
            console.log(event.target.value);
        }
    };

    saveTask(data){
        fetch('http://localhost:3000/task', {
            method: 'POST',
            headers: { 
              'Accept': 'application/json',
              'Content-Type':'application/json' },
            body: JSON.stringify({}),
          })
    
    }

    render(){
        return(
            <div className="header">
                <h1>todos</h1>
                <input className="new-todo" onKeyPress={event => this.newTask(event)} placeholder="What needs to be done?"/>
            </div>            
        )
    }
}

export default Header;