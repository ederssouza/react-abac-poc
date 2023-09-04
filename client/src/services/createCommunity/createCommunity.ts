import { api } from "../api";

async function createCommunity() {
  return api.post("/community");
}

export default createCommunity;
