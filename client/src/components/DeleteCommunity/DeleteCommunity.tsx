import { deleteCommunity } from "@/services";

function DeleteCommunity() {
  async function handleDeleteCommunity() {
    try {
      await deleteCommunity(1);
      console.log("Community deleted");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleDeleteCommunity}>Delete community</button>
    </div>
  );
}

export default DeleteCommunity;
