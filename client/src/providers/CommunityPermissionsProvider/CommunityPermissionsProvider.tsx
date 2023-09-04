import { useEffect, useState } from "react";
import { CommunityPermissions, CommunityPermissionsContext } from "@/contexts";
import { getUserPermissions } from "@/services";

type Props = {
  children: React.ReactNode;
};

function CommunityPermissionsProvider({ children }: Props) {
  const [userPermissions, setUserPermissions] = useState<
    CommunityPermissions[]
  >([]);

  function hasPermissions(permissions: CommunityPermissions[]) {
    return permissions.every((permission) =>
      userPermissions.includes(permission)
    );
  }

  useEffect(() => {
    async function fetchUserPermissions() {
      try {
        const response = await getUserPermissions();
        const { permissions } = response.data;

        setUserPermissions(permissions);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserPermissions();
  }, []);

  return (
    <CommunityPermissionsContext.Provider
      value={{ userPermissions, hasPermissions }}
    >
      {children}
    </CommunityPermissionsContext.Provider>
  );
}

export default CommunityPermissionsProvider;
