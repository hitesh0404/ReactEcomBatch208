import React, {  useReducer, useState } from 'react'
let initialState = {
    count: 0,
    msg : "neutral"
}
function dispatch(state, action) {

    switch (action.command) {
        case "increment":
            return {
            count: state.count + 1,
            msg: "increasing",
            };
        case "decrement":
            return {
            count: state.count - 1,
            msg: "decreasing",
            };
        default:
            return state
    }
}
function CounterNew() {
    
    // const [count, setcount] = useState(0);
    // const [msg, setMSG] = useState("neutral");
    const [state, setState] = useReducer(dispatch, initialState);
    return (
    <div>
      <div className="counter-parent">
        <div className="counter-child">
          <p>{state.msg}</p>
        </div>
        <div className="counter-child">
          <p>{state.count}</p>
        </div>
        <div className="counter-child">
          <button
            onClick={() => {
                setState({command:"increment"})
            }}>
            Icreament
          </button>
          <button
                onClick={() => {
                 setState({ command: "decrement" });
            }} >
         Decreament
          </button>
        </div>
      </div>
    </div>
  );
}
export default CounterNew