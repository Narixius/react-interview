import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

export const FormRenderer = () => {
  const { data, isLoading, isError } = useFetch(
    "https://form-api-eight.vercel.app/api/form"
  );

  return (
    <div className="p-4">
      <Link to="/intro" className="text-blue-500 block">
        Link to introduction
      </Link>
      Read the introduction and start implementation
    </div>
  );
};
