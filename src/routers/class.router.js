const express = require(`express`);
const router = express.Router();

const classRouter = require("../app/controllers/class.controller");
const authenticate = require("../app/middlewares/authenticate");
const {
  RequireRoleTeacher,
  RequireInClass,
} = require("../app/middlewares/require");

router.patch(
  "/:id",
  authenticate,
  RequireRoleTeacher,
  classRouter.editClassProfile
);
router.post(
  "/:id/request-send-invitation",
  authenticate,
  RequireInClass,
  classRouter.requestSendInvitation
);
router.post("/:id/join", authenticate, classRouter.joinClass);
router.get("/:id", authenticate, RequireInClass, classRouter.findClass);
router.post("/", authenticate, RequireRoleTeacher, classRouter.createNewClass);

module.exports = router;
