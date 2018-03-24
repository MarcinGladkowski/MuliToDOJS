import React from 'react';


class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
                    <div className="header">
                        <h1>todos</h1>
                        <input className="new-todo" placeholder="What needs to be done?"/>
                    </div>            
        )
    }
}

export default Header;