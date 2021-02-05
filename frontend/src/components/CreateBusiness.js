import React, { Component } from 'react'
import axios from 'axios';

export default class CreateBusiness extends Component {


    constructor(){
        super();
        this.state = {
            id: '',
            nombre: '',
            direccion: '',
            categoria: '',
            fechaCrea: Date.now(),
            business: []
        };
        //this.onSubmit = this.onSubmit.bind(this);
    }
    

    async componentDidMount() {
        this.getBusiness();
        console.log(this.state.business);
    }

    onChangeBusiness= (e)=> {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
        //console.log(`tome los datos${e.target.value}`)
    }

     getBusiness = async () => {
        const res = await axios.get('http://localhost:4000/business');
        this.setState({ business: res.data });
    }

    deleteBusine = async (id) => {
        console.log(id);
        await axios.delete('http://localhost:4000/business/' + id);
        this.getBusiness();
    }

    onSubmit = async e =>{
        e.preventDefault();
        console.log("entre al boton")
        console.log(JSON.stringify(this.state));

        const res = await axios.post('http://localhost:4000/business', {
            id: this.state.id,
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            categoria: this.state.categoria
        });
        console.log(res);
        this.setState({id:'', nombre:'', direccion:'', categoria:'', fechaCrea:''});
        this.getBusiness();
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Nuevo negocio</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    name= "id"
                                    type="Number"
                                    value={this.state.id}
                                    className="form-control" 
                                    placeholder=" ID"
                                    onChange={this.onChangeBusiness}
                                />
                                <input 
                                    name= "nombre"
                                    type="text"
                                    value={this.state.nombre}
                                    className="form-control" 
                                    placeholder=" Nombre"
                                    onChange={this.onChangeBusiness}
                                />
                                <input 
                                    name= "direccion"
                                    type="text"
                                    value={this.state.direccion}
                                    className="form-control" 
                                    placeholder="Direccion"
                                    onChange={this.onChangeBusiness}
                                />
                                <input 
                                    name= "categoria"
                                    type="text"
                                    value={this.state.categoria}
                                    className="form-control" 
                                    placeholder="Categoria"
                                    onChange={this.onChangeBusiness}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                            ADD
                            </button>
                        </form>
                        
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.business.map(business => (
                                <li className="list-group-item list-group-item-action" key={business._id}
                                    onDoubleClick={ () => this.deleteBusine(business._id)}>
                                    {business.nombre}
                                </li>                                
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
