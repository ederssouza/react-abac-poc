import ReactDOM from "react-dom/client";
import { CommunityPermissionsProvider } from "./providers";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CommunityPermissionsProvider>
    <App />
  </CommunityPermissionsProvider>
);
