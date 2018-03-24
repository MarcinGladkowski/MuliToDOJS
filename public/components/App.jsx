import React from 'react';

import Header from './Header.jsx';
import List from './List.jsx';

import '../css/base.css';
import '../css/index.css';

class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Header />
                <List />
            </div>
        )
    }
};

export default App;