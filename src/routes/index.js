import { createBrowserRouter } from "react-router-dom";
import PostList from "../components/PostList";
import Add from "../Pages/Add";
import Details from "../Pages/Details";
import Edit from "../Pages/Edit";
import ErrorPage from "../Pages/ErrorPage";
import RootLayout from "../Pages/RootLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PostList /> },
      { path: "edit/:id", element: <Edit /> },
      { path: "add", element: <Add /> },
      { path: "details/:id", element: <Details /> },
    ],
  },
]);
