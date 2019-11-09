import React from 'react';

export default function Header(props) {

  return (
    <>
      {/* PROPS CHILDREN */}
      {/* <h1>{props.children}</h1> */}

      {/* PROPS VIA KEY */}
      <h1>{props.text}</h1>
    </>
  );
}


