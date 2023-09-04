import { api } from "../api";

async function getUserPermissions() {
  return api.get("/user/permissions");
}

export default getUserPermissions;
