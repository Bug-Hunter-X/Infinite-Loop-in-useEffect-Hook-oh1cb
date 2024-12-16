useEffect(() => {
  // Incorrect logic to update state
  setCount(count + 1);
}, []); // This creates an infinite loop because the dependency array is empty.