import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervall = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(intervall);
  }, [timer]);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="effet">
      <button className="btne" onClick={increment}> Click me </button>
      <span>{count}</span>
      <br />
      <span onClick={reset}> Reset </span>
      <br />
      <span>{timer}</span>
    </div>
  );
};

export default Counter;
