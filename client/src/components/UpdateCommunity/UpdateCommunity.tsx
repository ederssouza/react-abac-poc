import { updateCommunity } from "@/services";

function UpdateCommunity() {
  async function handleUpdateCommunity() {
    try {
      await updateCommunity(1);
      console.log("Community updated");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleUpdateCommunity}>Update community</button>
    </div>
  );
}

export default UpdateCommunity;
