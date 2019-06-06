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

const TabelaCorpo = () => {
    return (
        <tbody>
            <tr>
                <td>Sávio</td>
                <td>21</td>
                <td>1.745</td>
            </tr>
            <tr>
                <td>Thamara</td>
                <td>19</td>
                <td>1.69</td>
            </tr>
        </tbody>
    )
}

class Tabela extends Component {

    render() {
        return (
            <table>
                <TabelaHead />
                <TabelaCorpo />
            </table>
        )
    }
}

export default Tabela