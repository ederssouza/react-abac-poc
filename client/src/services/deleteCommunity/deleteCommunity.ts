import { api } from "../api";

async function deleteCommunity(id: number) {
  return api.delete(`/community/${id}`);
}

export default deleteCommunity;
