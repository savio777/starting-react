import React, { Component } from 'react'

// componentes separados

const TabelaHead = () => {
    return (
        <thead>
            <tr>
                <th>Nomes</th>
                <th>Idade</th>
                <th>Altura</th>
            </tr>
        </thead>
    )
}

// tabela recebendo o props como argumento para povoar tabela
const TabelaCorpo = (props) => {
    // similar ao foreach para percorrer os dados e imprimir no retorno
    const linhas = props.characterData.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.idade}</td>
                <td>{linha.altura}</td>
            </tr>
        )
    })

    // retornar todos os elementos
    return <tbody>{linhas}</tbody>
}

class Tabela extends Component {
    render() {
        // prop é usado para compartilhar dados ou codigo entre os componentes do react
        const { characterData } = this.props

        return (
            <table>
                <TabelaHead />
                <TabelaCorpo characterData={characterData} />
            </table>
        )
    }
}

export default Tabela