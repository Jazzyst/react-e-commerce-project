import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products: storeProducts,
        detilProduct: detailProduct
    };
    hanleDdetail = ()=>{
        console.log('hello from Detail');
    };
    addToCart = ()=>{
        console.log('hello from AddToCart');
    };
    render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail: this.hanleDdetail, addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export  {ProductProvider, ProductConsumer};