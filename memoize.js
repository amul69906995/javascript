function memoize(fn) {
    let cashedValue = {}
    let functionCalled = 0;
    return function (...args) {
        const key = args.join(',');
        
        console.log("key",key);
        console.log("cashedValue",cashedValue);
        console.log("functionCalled",functionCalled);

        if (args.length == 0) {
            return functionCalled;
        }
        else if (JSON.stringify(cashedValue[key])) {
            return cashedValue[key]
        }
        else {
            const value = fn(...args)
            cashedValue[key] = value;
            functionCalled += 1;
            return value;
        }
     
    }
}

const memoizedValue=memoize((a,b)=>a+b);
console.log(memoizedValue(0,0))
console.log(memoizedValue(0,0))
console.log(memoizedValue())
console.log(memoizedValue(1,2))
console.log(memoizedValue())


// Is caching the same as memoization?
// Caching:
// Caching is a broader concept where you store data to be reused later, reducing the need to recompute or fetch the same data repeatedly. Caching can apply to:

// Function results (as in memoization)
// HTTP responses
// File system reads
// And more...
// Memoization:
// Memoization is a specific type of caching focused on storing the results of function calls based on their arguments. The next time the function is called with the same arguments, the stored result is returned instead of re-executing the function.

// Conclusion: Memoization is a subset of caching, specifically tailored for optimizing function calls.

// 2. Does the choice of data structure matter?
// Yes, the data structure used for caching directly impacts:

// Storage efficiency: How much memory is used for caching?
// Retrieval time: How quickly can you fetch cached results?
// In your example:

// You're using a JavaScript object (cashedValue) as a key-value store.
// Advantages: Fast lookup (O(1) average time complexity for object keys).
// Limitations: Limited to string keys. Non-string arguments need to be serialized.
// Other data structures like Maps (which allow non-string keys) or custom trees (for range-based lookups) could be used depending on the complexity of the use case.

// 3. Algorithms to find cached data?
// The algorithm to retrieve cached data depends on the chosen data structure:

// For objects (as in your example), simple string matching on keys suffices.
// For more complex scenarios:
// Use hashing if the arguments can be hashed uniquely.
// Use tree structures for range queries or hierarchical lookups.
// For memoization, a simple key-value mapping (as you've done) is typically sufficient.

// 4. Is JSON.stringify necessary?
// args.join(','):
// This works well if the arguments are strings or can be meaningfully concatenated into a unique string. However:

// It cannot distinguish between different argument types.
// For example, args = [1, 2] and args = ['1', '2'] would both result in the key '1,2'.
// It doesn't handle nested structures well.
// JSON.stringify(args):
// This creates a unique string representation for any input, including arrays, objects, and nested structures. It's more reliable for general use cases but slightly slower due to serialization overhead.

// Conclusion:

// For simple cases (e.g., all arguments are primitive types), args.join(',') is sufficient.
// For more complex arguments (e.g., objects, nested data), JSON.stringify(args) is safer.
