import { createContext } from "react";

export type CommunityPermissions =
  | "community.read"
  | "community.create"
  | "community.update"
  | "community.delete";

export type Props = {
  userPermissions: CommunityPermissions[];
  hasPermissions: (permissions: CommunityPermissions[]) => boolean;
};

const CommunityPermissionsContext = createContext({} as Props);

export default CommunityPermissionsContext;
