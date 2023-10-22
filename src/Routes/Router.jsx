import { createBrowserRouter } from "react-router-dom";
import App from "../Components/Root/App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>
    },
  ]);

  export default router;