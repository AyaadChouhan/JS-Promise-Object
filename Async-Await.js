// Async / await.
// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// Async functions
// Let’s start with the async keyword. It can be placed before a function, like this:

// async function f() {
//   return 1;
// }

// The word “async” before a function means one simple thing: a function always returns a promise.
// Other values are wrapped in a resolved promise automatically.
async function num() {
  return 1;
}
num()
  .then(function (val) {
    console.log(val);
  })
  .catch(function (error) {
    console.log(error);
  });

// Await keyword
async function prom(url) {
  let response = await fetch(url);//The keyword await makes JavaScript wait until that promise settles and returns its result.
  let data = await response.json();
  return data
}
prom("https://jsonplaceholder.typicode.com/users").then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});
// The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

// Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result