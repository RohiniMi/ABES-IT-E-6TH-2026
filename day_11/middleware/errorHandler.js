export const errorHandler = (err, req, res, next) => {
    console.log(err, "error Handler ");
    res.status(500).json({ message: err});
}