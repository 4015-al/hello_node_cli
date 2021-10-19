#!/usr/bin/env node

// grab provided args
const [,, ...args]= process.argv;

// print Hello, followed by provided args
console.log(`Hello ${args}`);