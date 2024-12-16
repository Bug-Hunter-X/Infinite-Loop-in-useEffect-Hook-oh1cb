useEffect(() => {
  // Correct logic to update state
  setCount(count + 1);
}, [count]); // Add count to the dependency array