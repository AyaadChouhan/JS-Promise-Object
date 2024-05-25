// Q-1) Basic Promise Creation: Create a function that returns a Promise.
//  The Promise should resolve after a delay of 1 second with a message "Promise resolved!".
function promiseResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "ayaad", age: 22 });
    }, 1000);
  });
}
promiseResolve().then(() => {
  console.log("okkk");
});

// Q-2) Promise Rejection: Create a function that returns a Promise.
// The Promise should reject immediately with an error message "Promise rejected!".
function promiseReject() {
  const num = 44;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === "444") {
        resolve("promise is resolved");
      } else {
        reject("this is rejected by promise");
      }
    }, 1000);
  });
}
promiseReject()
  .then(() => {
    console.log("gotit");
  })
  .catch((error) => {
    console.log(error);
  });

// Q-3) Chaining Promises: Create two functions, getData and processData.
// getData should return a Promise that resolves with some data (e.g., an object).
// processData should take this data as input and return a Promise that resolves with a processed result (e.g., modifying the data).
// Chain these two functions together.
function getData() {
  return new Promise((resolve, reject) => {
    // resolve("promise resolved");
    reject("i got a bug");
  });
}
function processData(data) {
  return new Promise((resolve, reject) => {
    resolve("process: " + data);
    reject("error");
  });
}
getData()
  .then(processData)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Q-4...Promise.all(): Create three functions, each returning a Promise that resolves after a different delay (e.g., 1 second, 2 seconds, 3 seconds).
//  Use Promise.all() to run all three Promises concurrently and log "All promises resolved!" when they all resolve.
function pro1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world");
      reject("oops")
    }, 1000);
  });
}
function pro2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world");
      reject("oops")
    }, 2000);
  });
}
function pro3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world");
      reject("oops")
    }, 3000);
  });
}
Promise.all([pro1(),pro2(),pro3()]).then( (value)=>{
    console.log("all promise resolved", value)
}).catch( (error)=>{
    console.log(error);
})

// Q-6)Promise.race(): Create two functions, each returning a Promise that resolves after different delays.
// Use Promise.race() to run both Promises concurrently and log "First promise resolved!" when the first one resolves.
function promies1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
      reject("oops got an error!");
    }, 1000);
  });
}
function promies2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 hello world");
      reject("2 oops got an error!");
    }, 200);
  });
}
Promise.race([promies1(), promies2()])
  .then((val) => {
    console.log("task completed " + val);
  })
  .catch((error) => {
    console.log(error);
  });

// Q-7) Fetching Data: Write a function that fetches data from an API using fetch() and returns a Promise.
// Handle both success and error cases.

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
    if (!result.ok) {
      throw new Error('Network response was not ok');
    }else{
      return result.json();
    }
  }).catch((err) => {
    return err;
  });
  
}
fetchData().then((data) => {
    console.log(data);
}).catch((err) => {
  console.log(err);
});