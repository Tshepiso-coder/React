import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
    
constructor(props){ 
    super(props); 
    this.state = {rating: this.props.rating};          
};

handleClick(ratingValue){     
this.setState({rating:ratingValue}); 
}

    render() {

        return ( 
            <div> 
                {/* EXAMPLE 1: PASSING DATA USING PROPS OBJECT */}               
                {/* <h1>Rating: {this.props.rating}</h1> 
               {this.props.rating >= 1 ? (<IoIosStar />) : (<IoIosStarOutline />)}      
                {this.props.rating >= 2 ? (<IoIosStar />) : (<IoIosStarOutline />)}  
                {this.props.rating >= 3 ? (<IoIosStar />) : (<IoIosStarOutline />)}  
                {this.props.rating >= 4 ? (<IoIosStar />) : (<IoIosStarOutline />)}  
                {this.props.rating >= 5 ? (<IoIosStar />) : (<IoIosStarOutline />)}  */}

                 <h1>Rating: {this.state.rating}</h1> 
               {this.state.rating >= 1 ? (<IoIosStar  onClick={this.handleClick.bind(this,1)} />) : (<IoIosStarOutline  onClick={this.handleClick.bind(this,1)} />)}
               {this.state.rating >= 2 ? (<IoIosStar  onClick={this.handleClick.bind(this,2)} />) : (<IoIosStarOutline  onClick={this.handleClick.bind(this,2)} />)}
               {this.state.rating >= 3 ? (<IoIosStar  onClick={this.handleClick.bind(this,3)} />) : (<IoIosStarOutline  onClick={this.handleClick.bind(this,3)} />)}
               {this.state.rating >= 4 ? (<IoIosStar  onClick={this.handleClick.bind(this,4)} />) : (<IoIosStarOutline  onClick={this.handleClick.bind(this,4)} />)}
               {this.state.rating >= 5 ? (<IoIosStar  onClick={this.handleClick.bind(this,5)} />) : (<IoIosStarOutline  onClick={this.handleClick.bind(this,5)} />)}      
                                                                              
            </div> 
        ); 
    } 
} 
export default Rating; 

// ========================
//Summary from Claude.ai
// Here's a summary of the code:

// **Component Overview**
// This is a React class component called `Rating` that implements a star-based rating system 
// using icons from `react-icons`.
// **Key Parts*
// - **Imports**: Brings in React, and two star icons — a filled star (`IoIosStar`) and an outline star 
// (`IoIosStarOutline`) — for rendering rated vs unrated states.

// - **State**: Initializes `rating` in the constructor using the `rating` prop passed from the parent component.

// - **`handleClick(ratingValue)`**: Updates the `rating` state when a star is clicked, triggering a re-render.

// - **`render()`**: Returns JSX (incomplete in the snippet) that would display the star icons, likely mapping over 
// a set of values and rendering filled or outline stars based on the current rating.

// **What's Missing**

// The `render()` method is cut off — it likely contains logic to map over star values, compare them 
// to `this.state.rating`, 
// and render either `IoIosStar` or `IoIosStarOutline` with an `onClick` calling `handleClick`.
// ===========================

// This is a React class component called **Rating** that implements a star rating system. Here's a summary:

// **State & Props**
// The component receives a `rating` prop and stores it in local state, initialized in the constructor 
// via `this.state = { rating: this.props.rating }`.

// **handleClick method**
// Updates the component's state with a new rating value when a star is clicked, making the rating interactive
//  rather than static.

// **Render method**
// The commented-out code (Example 1) shows the original approach — a static, 
// props-driven implementation that compared `this.props.rating` against values 1–5 to display
//  either a filled star (`IoIosStar`) or an outline star (`IoIosStarOutline`) from
//  the `react-icons` library. This was replaced by the state-based approach to support user interaction.

// The code appears to be mid-refactor, transitioning from a read-only display component to one where 
// users can click to set a rating.