import { CommunityPermissions } from "@/contexts";
import { useCommunityPermissions } from "@/hooks";

type Props = {
  permissions: CommunityPermissions[];
  children: React.ReactNode;
};

function HasPermission({ permissions, children }: Props) {
  const { hasPermissions } = useCommunityPermissions();

  const hasPermission = hasPermissions(permissions);

  if (!hasPermission) {
    return null;
  }

  return <>{children}</>;
}

export default HasPermission;
