import React, {useState} from 'react';

function MyButton({ initialCount }) {
  // Rapidly click the button to ensure it doesn’t crash or lag.

  // Solution: Add debounce logic to limit how quickly clicks are processed (advanced feature, optional).
  const [count, setCount] = useState(initialCount || 0);

  function handleClick() {
    setCount( count + 1);
  }
  return (
    <button onClick={handleClick}>Clicked {count} times! </button>
  );
}

export default MyButton;