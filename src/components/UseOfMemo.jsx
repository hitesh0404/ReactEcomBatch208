import React, { memo } from 'react'

import Greet from './Greet';
function UseOfMemo() {
  return (
    <div>
      <div className="counter-parent">
        <Greet name="Hitesh" />
        <Greet name="Hitesh" />
        <Greet name="Bhavesh" />
        <Greet name="Sangeeta" />
        <Greet name="Sangeeta" />
        <Greet name="Hitesh" />
      </div>
    </div>
  );
}

export default UseOfMemo