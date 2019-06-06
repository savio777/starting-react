import React, { Component } from 'react'
import Tabela from './Tabela';

// jsx
const iae = 'Iae'
const h1 = <h1 className="site-heading">{iae} React</h1>

class App extends Component {
    render() {

        // array em formato JSON para povoar tabela
        const dados = [
            {
                nome: 'Sávio',
                idade: 21,
                altura: 1.75
            },
            {
                nome: 'Thamara',
                idade: 19,
                altura: 1.69
            }
        ]

        // inserindo os dados na tabela
        return (
            <div className="container">
                <p>{h1}</p>
                <Tabela characterData={dados} />
            </div>
        )
    }
}

export default App