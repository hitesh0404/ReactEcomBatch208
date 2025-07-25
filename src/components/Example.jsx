import React, { useState } from "react";

// A memoized component
const Button = React.memo(({ onClick, children }) => {
  console.log("Rendering Button:", children);
  return <button onClick={onClick}>{children}</button>;
});

const Example = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const incrementClicks = () => setClicks(clicks + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={incrementCount}>Increment Count</Button>

      <h1>Clicks: {clicks}</h1>
      <Button onClick={incrementClicks}>Increment Clicks</Button>
    </div>
  );
};

export default Example;
