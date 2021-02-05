import React, { Component } from 'react'
import axios from 'axios';

export default class CreateOwner extends Component {

    constructor() {
        super();
        this.state = {
            id_business: '',
            documento: '',
            id: '',
            nombre: '',
            correo: '',
            userSelected: '',
            business: []
        }
    }


    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/business');
        //console.log(res);
        this.setState({ business: res.data });
        console.log(this.state.business);
    }

    addOwner = async (e) => {
        console.log('agregando dueña');
        e.preventDefault();
        console.log(JSON.stringify(this.state));

        const res = await axios.post('http://localhost:4000/owners', {
            id_business: this.state.id_business,
            documento: this.state.documento,
            id: this.state.id,
            nombre: this.state.nombre,
            correo: this.state.correo
        });
        console.log(res);
        this.setState({ id_business: '', documento: '', id: '', nombre: '', correo: '' });
    }


    onInputChange = async (e) => {
        //console.log(e.target.value);
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card car-body">
                    <h4>Agregar encargado(a)</h4>
                    <form onSubmit={this.addOwner}>
                        {/*select business*/}
                        <div className="form-group">
                            <select className="form-control" name="busineSelected" onChange={this.onInputChange} placeholder="Negocio">
                                {
                                    this.state.business.map(business =>
                                        <option key={business._id} value={business.nombre}>
                                            {business.nombre}
                                        </option>)
                                }
                            </select>
                        </div>

                        <div className="form-group" >
                            <input type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                value={this.state.nombre}
                                onChange={this.onInputChange}
                                required />
                        </div>

                        <div className="form-group">
                            <input
                                name="documento"
                                type="text"
                                value={this.state.documento}
                                className="form-control"
                                placeholder="Tipo de documento"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="id"
                                type="Number"
                                value={this.state.id}
                                className="form-control"
                                placeholder="ID"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="correo"
                                type="text"
                                value={this.state.correo}
                                className="form-control"
                                placeholder="Email"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onChange={this.addOwner}>OK</button>
                    </form>
                </div>
            </div>
        )
    }
}
