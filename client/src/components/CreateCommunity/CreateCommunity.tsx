import { createCommunity } from "@/services";

function CreateCommunity() {
  async function handleCreateCommunity() {
    try {
      await createCommunity();
      console.log("Community created");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleCreateCommunity}>Create community</button>
    </div>
  );
}

export default CreateCommunity;
