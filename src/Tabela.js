import React, { Component } from 'react'

class Tabela extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nomes</th>
                        <th>Idade</th>
                        <th>Altura</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}

export default Tabela