import { Link } from "react-router-dom";
import {
  CreateCommunity,
  DeleteCommunity,
  UpdateCommunity,
} from "@/components";
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

  useEffect(() => {
    async function fetchCommunity() {
      setRequestState((prevState) => ({ ...prevState, loading: true }));

      try {
        await getCommunity(1);
      } catch (error) {
        setRequestState((prevState) => ({
          ...prevState,
          error: error?.toString(),
        }));
      } finally {
        setRequestState((prevState) => ({ ...prevState, loading: false }));
      }
    }

    fetchCommunity();
  }, []);

  if (requestState.loading) {
    return <div>Loading...</div>;
  }

  if (requestState.error) {
    return <div>{requestState.error}</div>;
  }

  return (
    <div>
      <Link to="/">Go to home</Link>

      <section>
        <h1>Community page (Without ABAC)</h1>

        <CreateCommunity />
        <UpdateCommunity />
        <DeleteCommunity />
      </section>
    </div>
  );
}

export default Example2;
