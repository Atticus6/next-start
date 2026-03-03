import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/hello",
    element: <div>Hello World</div>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
