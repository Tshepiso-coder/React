// Code Summary- Claude.ai
// This is a React class component called Products that renders a simple list of book titles.

// What it does:

// Defines a static array of three product names — all React-related books.
// Maps over the array to convert each product into an <li> element, using the product name as a unique key.
// Renders a <div> containing an <h2> heading ("Products") and an unordered list (<ul>) of those items.
// Output: A headed list displaying:

// Learning React
// Pro React
// Beginning React
// Notable points:

// Uses the older class-based component style (vs. modern functional components with hooks).
// The key prop on each <li> helps React efficiently track and re-render list items.
// The data is hardcoded — there's no props, state, or external data fetching involved.
//========================================

//import React, { Component } from 'react'; 

function Products() { 
const products = ["Learning React","Pro React","Beginning React"]; 
const listProducts = products.map((product) =>  
<li key={product.toString()}>{product}</li> 
); 

return ( 
<div> 
    <h2> 
        Products 
    </h2> 
    <ul>{listProducts}</ul>
</div> 
); 
}  

export default Products; 
