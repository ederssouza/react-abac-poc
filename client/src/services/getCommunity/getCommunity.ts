import { api } from "../api";

async function getCommunity(id: number) {
  return api.get(`/community/${id}`);
}

export default getCommunity;
