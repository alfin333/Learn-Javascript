// Promises =   object that encapsulates the result of an asynchronus operation 
//              let asynchronus methods return values like synchronous methods 
//              "I promise to return something in the future"

//              the STATE is "pending" then: "fulfilled" or "rejected"
//              the RESULT is what can be returned
//              2 parts producing & consuming

const wait = (time) => new Promise((resolve) => {
  setTimeout(resolve, time)
});

wait(3000).then(() => console.log("thanks for waiting!"))

/*
function wait(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

wait(3000).then(function() {
  console.log("thanks for waiting!");
});
*/