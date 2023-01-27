const controller = require("../controllers/user.controller.js");
const userModel = require("../../data/models/user");

module.exports = function(app){
    app.use(function(req,res,next) {
        res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Origin, Content-Type, Accept"
        );
    });

    app.post("/loginUser", controller.loginUser())

    //OPWS STO /DATA/ROUTES/USERPOST META TO ASYNC EINAI O CONRTOLLER
    // app.post('/', async (req, res) => {
    //     const user = new userModel(req.body);
    //     try {
    //         await user.save();
    //         res.status(201).send(user);
    //     }catch(error){
    //         res.status(500).send(error);
    //     }
    // });
};