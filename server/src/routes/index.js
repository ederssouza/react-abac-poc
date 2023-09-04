const { Router } = require("express");
const { communityRoutes } = require("./community.routes");
const { userRoutes } = require("./user.routes");

const router = Router();

router.use("/user", userRoutes);
router.use("/community", communityRoutes);

module.exports = { router };
