import React from 'react';
import '../css/base.css';
import '../css/index.css';

class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                 <section className="todoapp">
                    <div className="header">
                        <h1>todos</h1>
                    </div>
                 </section>
            </div>
        )
    }
};

export default App;