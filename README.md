# React Native: Uninitialized State Access Error

This repository demonstrates a common error in React Native applications: attempting to access a state variable before it has been initialized.  The error manifests when using the `useState` hook in functional components.  The solution involves conditional rendering or using the optional chaining operator to gracefully handle the undefined state.

## Bug
The `bug.js` file contains a functional component that tries to access the `name` property of the `user` state variable before it has been set.  This causes a runtime error because `user` is initially `undefined`.

## Solution
The `bugSolution.js` file demonstrates two ways to solve this problem:

1. **Conditional Rendering:** Check if `user` is defined before attempting to access its properties.
2. **Optional Chaining:** Use the optional chaining operator (`?.`) to safely access properties of potentially undefined objects.