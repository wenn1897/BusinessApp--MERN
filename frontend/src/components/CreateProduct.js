import React, { Component } from 'react'
import axios from 'axios';

export default class CreateProduct extends Component {
    
state = {
    products: []
}

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/products');
        //console.log(res);
        this.setState({products: res.data});
        console.log(this.state.products);
    }

    render() {
        return (
            <div>
                CREACION DE PRODUCTOS
            </div>
        )
    }
}
