import React from 'react';

function Square(props: any){ 
    return (
      <button className="square" onClick={props.onClick}>
          {props.value}
      </button>
    );
}

export default Square;