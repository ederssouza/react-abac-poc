const permissionsByRole = {
  client: [],
  owner: ["community.read", "community.create", "community.update"],
  admin: [
    "community.read",
    "community.create",
    "community.update",
    "community.delete",
  ],
};

module.exports = { permissionsByRole };
