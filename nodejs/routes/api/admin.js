const express = require("express");
const router = express.Router();
const adminService = require("../../services/adminService");
const { asyncHandler } = require("../getSendResult");
const cryptor = require("../../util/crypt");
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const result = await adminService.login(
      req.body.loginId,
      req.body.loginPwd
    );
    if (result) {
      let value = result.id;
      value = cryptor.encrypt(value.toString());
      //登录成功
      res.cookie("token", value, {
        path: "/",
        domain: "localhost",
        maxAge: 7 * 24 * 3600 * 1000, //毫秒数
      });
      res.header("authorization", value);
    }
    return result;
  })
);
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    return await adminService.addAdmin(req.body);
  })
);
module.exports = router;
