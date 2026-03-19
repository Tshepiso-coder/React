// import React, { Component } from 'react';
import Product from './Product';

function Products() {

    // products;
  
    // constructor(props) {
    //     super(props);
    //     this.products = this.getProducts();
    // }

   const getProducts = () => {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor,
                 tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.`,
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor,
                 tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.`,
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor,
                 tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.` ,
                rating: 5,
                numOfReviews: 2
            }];
    }
     const products = getProducts();

        const listProducts = products.map((product) =>
            <Product key={product.productName} data={product} />
        );
    
  return (
            <div>
                <ul>{listProducts}</ul>
            </div>
        );
    }
export default Products;

// ## Summary

// This is a React **class component** called `Products` that displays a list of products.

// **How it works:**

// The constructor calls `getProducts()`, which returns a hardcoded array of 3 product objects.
//  Each product has these fields: `imageUrl`, `productName`, `releasedDate`, `description`, `rating`, 
// and `numOfReviews`.

// In the `render()` method, it maps over the products array and renders a 
// child `<Product />` component for each item, passing the product data as a `data` prop.
//  The result is wrapped in a `<div>` containing an unordered list `<ul>`.

// **In short:** it's a simple container component that holds static product data and renders each 
// product using a reusable `<Product>` child component.