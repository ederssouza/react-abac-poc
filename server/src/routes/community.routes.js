const { Router } = require("express");
const { hasResourcePermission } = require("../utils");

const communityRoutes = Router();

communityRoutes.get("/:id", (req, res) => {
  const hasPermission = hasResourcePermission("community", "read");

  if (!hasPermission) {
    return res.status(403).json({
      error: "You do not have permission to read a community",
    });
  }

  res.send();
});

communityRoutes.post("/", (req, res) => {
  const hasPermission = hasResourcePermission("community", "create");

  if (!hasPermission) {
    return res.status(403).json({
      error: "You do not have permission to create a community",
    });
  }

  res.send();
});

communityRoutes.put("/:id", (req, res) => {
  const hasPermission = hasResourcePermission("community", "update");

  if (!hasPermission) {
    return res.status(403).json({
      error: "You do not have permission to update a community",
    });
  }

  res.send();
});

communityRoutes.delete("/:id", (req, res) => {
  const hasPermission = hasResourcePermission("community", "delete");

  if (!hasPermission) {
    return res.status(403).json({
      error: "You do not have permission to remove a community",
    });
  }

  res.send();
});

module.exports = { communityRoutes };
