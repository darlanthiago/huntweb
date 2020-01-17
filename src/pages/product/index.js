import React, { Component } from 'react';
import api from '../../services/api';
import UpworkJobLoader from "../../components/loading/UpworkJobLoader";

import "./styles.css";


export default class Product extends Component {

    state = {

        product: {},
        loading: true,


    };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data, loading: false });

    }

    render() {
        const { product, loading } = this.state;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block 
            return <UpworkJobLoader />; // render null when app is not ready
        }

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p >

                    URL: <a href={product.url} target="_blank">{product.url}</a>

                </p>
            </div>


        );
    }
}