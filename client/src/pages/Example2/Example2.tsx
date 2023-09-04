import { Link } from "react-router-dom";
import {
  CreateCommunity,
  DeleteCommunity,
  HasPermission,
  UpdateCommunity,
} from "@/components";
import { useCommunityPermissions } from "@/hooks";
import { useEffect, useState } from "react";
import { getCommunity } from "@/services";

type RequestState = {
  loading: boolean;
  error?: string;
};

function Example2() {
  const [requestState, setRequestState] = useState<RequestState>({
    loading: false,
    error: undefined,
  });

  const { hasPermissions } = useCommunityPermissions();

  const hasReadCommunityPermission = hasPermissions(["community.read"]);

  useEffect(() => {
    async function fetchCommunity(id: number) {
      setRequestState((prevState) => ({ ...prevState, loading: true }));

      try {
        await getCommunity(id);
      } catch (error) {
        setRequestState((prevState) => ({
          ...prevState,
          error: error?.toString(),
        }));
      } finally {
        setRequestState((prevState) => ({ ...prevState, loading: false }));
      }
    }

    if (hasReadCommunityPermission) {
      fetchCommunity(1);
    }
  }, [hasReadCommunityPermission]);

  if (requestState.loading) {
    return <div>Loading...</div>;
  }

  if (requestState.error) {
    return <div>{requestState.error}</div>;
  }

  return (
    <div>
      <Link to="/">Go to home</Link>

      <HasPermission permissions={["community.read"]}>
        <section>
          <h1>Community page (With ABAC)</h1>

          <HasPermission permissions={["community.create"]}>
            <CreateCommunity />
          </HasPermission>

          <HasPermission permissions={["community.update"]}>
            <UpdateCommunity />
          </HasPermission>

          <HasPermission permissions={["community.delete"]}>
            <DeleteCommunity />
          </HasPermission>
        </section>
      </HasPermission>
    </div>
  );
}

export default Example2;
