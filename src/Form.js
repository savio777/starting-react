import React, { Component } from 'react'

class Form extends Component {
    // construtor para inicializar o state com as chaves zeradas poder utilizar elementos de outras classes
    constructor(props) {
        super(props)

        this.initialState = {
            nome: '',
            idade: 0,
            altura: 0
        }

        this.state = this.initialState
    }

    // função para guardar os inputs no state
    // deve ser usado o nome da função original
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    enviarForm = (event) => {
        event.preventDefault()

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { nome, idade, altura } = this.state

        return (
            <div className="row">
                <form className="col s10" onSubmit={this.enviarForm}>
                    <div className="row">
                        <div className="input-field col s10">
                            <input type="text" id="nome" name="nome" value={nome} onChange={this.handleChange} />
                            <label htmlFor="nome" className="active">Nome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                            <input type="number" id="idade" name="idade" value={idade} onChange={this.handleChange} />
                            <label htmlFor="idade" className="active">Idade</label>
                        </div>
                        <div className="input-field col s5">
                            <input type="number" step="0.1" id="altura" name="altura" value={altura} onChange={this.handleChange} />
                            <label htmlFor="altura" className="active">Altura</label>
                        </div>
                        <button type="submit" className="btn-floating btn-large waves-effect waves-light" onClick={this.enviarForm}>
                            <i className="medium material-icons">add</i>
                        </button>
                    </div>
                </form>
            </div>

       
        )
    }
}

export default Form