const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);


  // router.route("/")
  // .post(function whatever(){
  //   console.log("hit here 2");
  // })
router.route("/login")
  .post(userController.login);

// router.route("api/user")
//   .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:username")
  .put(userController.update)
  .get(userController.findById)
  .delete(userController.remove);

module.exports = router;