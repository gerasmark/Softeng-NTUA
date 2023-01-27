const userModel = require("../../data/models/user");


exports.loginUser = async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};