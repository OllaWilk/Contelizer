import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, TaskOne, TaskTwo, TaskThree, NotFound } from "./views";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "task-one", element: <TaskOne /> },
      { path: "task-two", element: <TaskTwo /> },
      { path: "task-three", element: <TaskThree /> },
    ],
  },
]);

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
