import React from "react";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import FreelancersList from "./components/FreelancersList";
import FreelancerDetails from "./components/FreelancerDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FreelancersList />,
      },
      {
        path: "/freelancer/:id",
        element: <FreelancerDetails />,
      },
    ],
  },
]);

export default App;
