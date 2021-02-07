import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
      <>
         <h1>Teste</h1>
      </>
    );
}

export default App;

if (document.getElementById('reactjs')) {
    ReactDOM.render(<App />, document.getElementById('reactjs'));
}
