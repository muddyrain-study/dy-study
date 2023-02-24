const express = require("express");
const router = express.Router();
const adminService = require("../../services/adminService");
const { asyncHandler } = require("../getSendResult");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const result = await adminService.login(req.body.loginId, req.body.loginId);
    return result;
  })
);

module.exports = router;
