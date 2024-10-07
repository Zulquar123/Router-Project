import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/about");
  };
  return (
    <div className="w-[40%] mt-5 m-auto">
      <h1 className="font-bold text-4xl border-4 border-black rounded-xl inline px-2 ">
        Home
      </h1>
      <p className="border-4 border-black rounded-xl mt-5 p-2 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
        nemo exercitationem nisi nulla perspiciatis numquam consectetur
        perferendis aspernatur, labore sapiente provident? At accusamus sit ex
        et, facilis quidem laudantium corrupti maxime consequuntur veniam natus.
        Ipsam excepturi tenetur voluptatum magnam totam.
      </p>
      <button
        className="px-2 mt-3 text-xl border-4 border-black rounded"
        onClick={handleBtn}
      >
        ⬅️ Back...
      </button>
    </div>
  );
}
