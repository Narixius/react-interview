import React from "react";
import {Introduction} from './Introduction'
import './styles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FormRenderer } from "./FormRenderer";


const router = createBrowserRouter([
  {
    path: "/intro",
    element: (
      <Introduction />
    ),
  },
  {
    path: "/",
    index: true,
    element: <FormRenderer />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
