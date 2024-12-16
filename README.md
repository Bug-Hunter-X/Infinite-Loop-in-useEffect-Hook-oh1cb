# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by omitting dependencies. The `useEffect` hook, when used without a dependency array, runs after every render, leading to uncontrolled state updates and potentially crashing the application.

## Bug Description
The `bug.js` file contains a simple counter component that uses the `useEffect` hook to increment a state variable.  The problem is that the dependency array is empty (`[]`), so the effect runs after every render, causing the `count` state to update continuously, resulting in an infinite loop. 

## Solution
The `bugSolution.js` file provides a corrected version. By adding `count` to the dependency array, the effect only runs when the `count` variable changes, resolving the infinite loop issue. 