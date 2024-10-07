import React from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col w-[30%] rounded  border-4 p-20 border-black m-auto items-center mt-20 ">
      <h1 className="text-5xl font-bold">Error 404 , Page not found </h1>

      <button
        className="mt-10 rounded border-4 font-bold text-2xl border-black px-2"
        onClick={handleBtn}
      >
        ⬅️ Go Back
      </button>
    </div>
  );
}
