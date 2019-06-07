import React, { Component } from 'react'
import Tabela from './Tabela';

// jsx
const iae = 'Iae'
const h1 = <h1 className="card-panel teal lighten-1">{iae} React</h1>

class App extends Component {
    // agora será possível modificar os dados
    state = {
        dados: [
            {
                nome: 'Sávio',
                idade: 21,
                altura: 1.75
            },
            {
                nome: 'Thamara',
                idade: 19,
                altura: 1.69
            },
        ],
    }

    // função para receber o index da linha e gerar novo array sem o index apagado
    removerDado = (index) => {
        const { dados } = this.state

        this.setState({
            dados: dados.filter((dado, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const { dados } = this.state

        // inserindo os dados na tabela
        return (
            <div className="container">
                {h1}
                <br /><br /><br />
                <Tabela
                    characterData={dados}
                    removeCharacter={this.removerDado}
                />
            </div>
        )
    }
}

export default App