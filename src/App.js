import React, { Component } from 'react'
import Tabela from './Tabela'
import Form from './Form'

// jsx
const iae = 'Iae'
const h1 = <h1 className="card-panel teal lighten-1">{iae} React</h1>

class App extends Component {

    // lista vazia para ser manipulada com os dados para a tabela
    state = {
        dados: [],
    }

    adicionarDado = (dado) => {
        this.setState({ dados: [...this.state.dados, dado] })
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
                <br /><br />

                <Form handleSubmit={this.adicionarDado} />
                <Tabela
                    characterData={dados}
                    removeCharacter={this.removerDado}
                />
            </div>
        )
    }
}

export default App