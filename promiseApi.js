// Promise API
// There are 6 static methods in the Promise class.

// =============================================
// Promise.all
// Let’s say we want many promises to execute in parallel and wait until all of them are ready.

// For instance, download several URLs in parallel and process the content once they are all done.

// That’s what Promise.all is for.

// The syntax is:

let promise = Promise.all(iterable);

// Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
// The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
// For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:


Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member


//   ==================================Promise.AllSetteled()
// Promise.allSettled is a method available in JavaScript for handling multiple promises concurrently. 
// Introduced in ECMAScript 2020 (ES11), it takes an iterable of promises as input and returns a single promise.
//  This returned promise resolves after all input promises have either been fulfilled or rejected, regardless of their outcomes. 
// Unlike Promise.all, which short-circuits when any promise rejects, Promise.allSettled waits for all promises to settle before resolving.const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error occurred');
const promise3 = Promise.resolve(30);

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
      } else {
        console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
      }
    });
  });

// =================================================

// Promise.race
// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

// The syntax is:

// let promise = Promise.race(iterable);
// For instance, here the result will be 1:

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(alert); // 1
// The first promise here was fastest, so it became the result. After the first settled promise “wins the race”, all further results/errors are ignored.

// ======================================

// Promise.any
// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

// The syntax is:

// let promise = Promise.any(iterable);
// For instance, here the result will be 1:

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(alert); // 1
// The first promise here was fastest, but it was rejected, so the second promise became the result. After the first fulfilled promise “wins the race”, all further results are ignored.