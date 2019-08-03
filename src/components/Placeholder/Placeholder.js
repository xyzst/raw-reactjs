import React, {Component} from 'react';
import styled from 'styled-components';
import AnotherPlaceholder from "../AnotherPlaceholder/AnotherPlaceholder";

class Placeholder extends Component {

  const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  `;

  render() {
    return (
      <div>
        <Button>Rawr</Button>
        <AnotherPlaceholder/>
        {this.props.handler()}
      </div>)
  }
}

export default Placeholder;