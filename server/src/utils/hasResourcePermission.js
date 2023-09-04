const { permissionsByRole, ROLE } = require("../mocks");

function hasResourcePermission(resource, permission) {
  return permissionsByRole[ROLE].includes(`${resource}.${permission}`);
}

module.exports = { hasResourcePermission };
