import { RouterProvider } from "react-router-dom";
import { createSiteRouter } from "./router";

const router = createSiteRouter();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
