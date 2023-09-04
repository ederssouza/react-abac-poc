import { useContext } from "react";
import { CommunityPermissionsContext } from "@/contexts";

function useCommunityPermissions() {
  const context = useContext(CommunityPermissionsContext);

  if (!Object.keys(context).length) {
    throw new Error(
      "useCommunityPermissions must be used within a CommunityPermissionsContextProvider"
    );
  }

  return context;
}

export default useCommunityPermissions;
