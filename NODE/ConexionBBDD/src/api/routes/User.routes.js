const { upload } = require("../../middleware/files.middleware");
const {
  registerLargo,
  register,
  registerWithRedirect,
  sendCode,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  changePassword,
  sendPassword,
} = require("../controllers/User.controllers");
const express = require(`express`);
const UserRoutes = express.Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post(`/registerUtil`, upload.single("image"), register);
UserRoutes.get("/register", upload.single("image"), registerWithRedirect);

UserRoutes.get("/register/sendMail/:id", sendCode);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/sendPassword/:id", sendPassword);

module.exports = UserRoutes;
