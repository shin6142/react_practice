import React, { useState } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const { itemName, price } = state;
  return (
    <>
      <p>現在の{itemName}は、{price}円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={itemName} onChange={ e => setState({...state, itemName: e.target.value}) } />
    </>
  )
}

App.defaultProps = {
  itemName: '',
  price: 0
}


export default App;