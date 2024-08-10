
// promises
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };


















  
    


// const asyncHandler = ()=>{} 
// const asyncHandler = (fun)=> ()=>{}
// const asyncHandler = (fun) =>  sync()=>{}
// we can use the above three syntaxes to define the asyncHandler function
// The asyncHandler function is a higher-order function that takes a function as an argument and returns
//  a new function. The new function is an asynchronous function that calls the original function and catches
//  any errors that it throws.
//  This allows us to handle asynchronous errors in a cleaner way by using try/catch blocks instead of 
// .then/.catch chains. 


//try and catch block is used to handle the error in the async function


// const asyncHandler = ()=> async(error, req,res,next)=> {
//     try{
//         await fun(req,res,next);
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Something went wrong"
//         });
//     }
// }
// export { asyncHandler };