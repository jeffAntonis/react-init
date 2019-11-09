import React, { Component, useState } from 'react';

import Header from './components/Header';

//COMPONENTE CLASSE
class App extends Component {
  state = {
    name: 'Mary'
  }

  render() {
    return (
      <div>
        {/* PROPS CHILDREN */}
        {/* <Header>Teste</Header> */}

        {/* PROPS VIA KEY */}
        <Header text="Teste" />

        {`Iae ${this.state.name}`}

        <br />

        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
          style={{
            height: 25,
            background: 'pink',
            borderRadius: 10
          }}
        />
      </div>
    )
  }
}

//COMPONENTE FUNCIONAL
// function App() {
//   const [name, setName] = useState('Mary');

//   return (
//     <div>
//       {`Iae ${name}`}

//       <br />

//       <input
//         type="text"
//         name="name"
//         id="name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />
//     </div>
//   );
// }

export default App;
