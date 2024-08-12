
const asyncHandler = (fn) => {
    return (req, res, next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };  
}

export default asyncHandler;

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);

//     } catch (err) {
//         res.status(err.code).json({
//             success: false,
//             message: err.message
//         });
//      }
// }

