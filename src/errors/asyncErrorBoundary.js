
//promise.resolve...,next) makes sure that the delegate function is called in a promise chain, meaning that the delegate function is guaranteed to have a catch method, even if delegate isn't an async function. 

//the catch() method will default error to {} if the error is undefined, which will make sure the destructuring in the next line doesn't fail. 

//the line "const{status=defaultStatus, message= error} = error" destructures the error object to status and mesage variables. Defaulting message to error means that error can be a string or Error object.

//next is called, passing in status and message
function asyncErrorBoundary(delegate, defaultStatus) {
    return (request, response, next) => {
      Promise.resolve()
        .then(() => delegate(request, response, next))
        .catch((error = {}) => {
          const { status = defaultStatus, message = error } = error;
          next({
            status,
            message,
          });
        });
    };
  }
  
  module.exports = asyncErrorBoundary;