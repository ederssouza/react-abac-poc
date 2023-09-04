import { api } from "../api";

async function updateCommunity(id: number) {
  return api.put(`/community/${id}`);
}

export default updateCommunity;
