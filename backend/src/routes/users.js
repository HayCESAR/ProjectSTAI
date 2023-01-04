const router = require("express").Router();
const userController = require('../controllers/user');

router.get("/", userController.getUsers);
router.post("/", userController.setUser);
router.post("/edit", userController.editUser);
router.post("/addPermisssion", userController.addPermission);
router.post("/removePermission", userController.removePermission);
router.post("/inactivateUser", userController.inactivateUser);
router.post("/activateUser", userController.inactivateUser);

module.exports = router;