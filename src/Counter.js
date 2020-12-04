import React, { useState } from 'react'

export default function counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevState => prevState + 1);
  }
  
  return (
    <div>
      <button
        data-testid='counter-button'
        onClick={handleClick}
      >
        {count}
      </button>
    </div>
  );
}