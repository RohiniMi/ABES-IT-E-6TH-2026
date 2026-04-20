import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        res.status(200).json({ data: user, message: "User has been registered successful" })
    } catch (error) {
        next(error);
    }
}
export const readUsers = async (req, res, next) => {
    try {
        // const users = await User.finds();
        // res.status(200).json({ data: users, message: "successful" })
        next("unable to read")
    } catch (error) {
        console.log("catch block");
        next(error)
    }
}
export const updateUser = async (req, res, next) => {
    try {
        const user = await User.updateOne(
            { email: req.params.email },
            { $set: req.body });
        res.status(200).json({ data: user, message: "updation successful" });
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        console.log(req.params.email);

        const deletedUser = await User.findOneAndDelete({ email: req.params.email });
        deletedUser
            ? res.status(200).json({ data: deletedUser, message: "successful" })
            : res.status(400).json({ message: "User is not existing" });
    } catch (error) {
        next(error)
    }
}
// deleteUser("abc@gmail.com")
// updateUser("abc@gmail.com",{password:"abc@123456"});
// readUsers();
// createUser({name:"rohini",email:"xyz@gmail.com",password:"1324256",gender:"F"});