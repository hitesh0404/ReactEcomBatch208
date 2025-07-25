import React from "react";

const Greet = React.memo(function ({ name }) {
  console.log("rerenderd with ", name);
  return <div className="counter-child">Hello {name}</div>;
});
export default Greet