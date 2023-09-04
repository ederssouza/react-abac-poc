const { Router } = require("express");
const { permissionsByRole, ROLE } = require("../mocks");

const userRoutes = Router();

userRoutes.get("/permissions", (req, res) => {
  const permissions = permissionsByRole?.[ROLE] || [];

  res.json({ permissions });
});

module.exports = { userRoutes };
