import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

function JumboTronComponent(props) {
    return (
      <div>
        <Container fluid className="p-5 mb-4 bg-light rounded-3">
          <h1>Hello, world!</h1>
          <p>
           {props.children}
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </div>
    );
  }


export default JumboTronComponent;

        // {/ EXAMPLE 1: Hardcoding jumbotron content in its own component /}
        // {/ <JumboTronComponent /> /}

        // EXAMPLE 2: Pass content to jumbotron content via props objects
        // <JumboTronComponent body="Incerting content dynamically" />

        // EXAMPLE 3: Passing content from outside component via props.children 
        // Anything in this opening and closing tags, that can be added to the jumbotron we built, 
        // this is referred to 'children'. So to call it we will say this.props.children

        // <JumboTronComponent>

        //   This is a long sentence, and I want to insert content into the
        //   jumbotron component from the outside.

        // </JumboTronComponent>

//===============
// This is a React class component called JumboTronComponent that renders a styled hero/banner 
// section using React Bootstrap.

// What it does:

// Imports Container and Button from react-bootstrap to use Bootstrap's pre-styled UI components.

// Renders a Container with padding, margin, a light background, and rounded corners — 
// mimicking Bootstrap's classic "Jumbotron" layout.

// Displays a static "Hello, world!" heading.

// Renders this.props.children, meaning any content passed between the component's opening and 
// closing tags will appear in the paragraph below the heading.

// Shows a primary-styled "Learn more" button.

//========================