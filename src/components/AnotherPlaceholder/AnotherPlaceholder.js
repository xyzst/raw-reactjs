import React, {useState} from 'react';
import classes from './AnotherPlaceholder.css';
import styled from 'styled-components';

const anotherPlaceholder = () => {

  const [count, setCount] = useState(-9);

  return (
    <div className={classes.AnotherPlaceholder}>
      <p>The button has been clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
    </div>
  );
};

export default anotherPlaceholder;