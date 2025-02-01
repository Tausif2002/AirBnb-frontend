import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HouseDetail from "./House-detail/HouseDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/house/:id",
    element: <HouseDetail></HouseDetail>,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics/>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}
