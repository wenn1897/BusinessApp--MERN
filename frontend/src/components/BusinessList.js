import React, { Component } from 'react'
import axios from 'axios';

export default class BusinessList extends Component {
    
    state = {
        nombre: '',
        business :[]
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/business');
        //console.log(res);
        this.setState({business: res.data});
        console.log(this.state.business);
    }

    render() {
        return (
            <div>
                LISTA DE NEGOCIOS
            </div>
        )
    }
}
