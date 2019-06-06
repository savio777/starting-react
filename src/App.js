import React, {Component} from 'react'
import Tabela from './Tabela';

// jsx
const iae = 'Iae'
const h1 = <h1 className="site-heading">{iae} React</h1>

class App extends Component{
    render(){
        return(
            <div className="container">
                {h1}
                <Tabela />
            </div>
        )
    }
}

export default App