import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/");
  };
  return (
    <div className="w-[40%] mt-5 m-auto">
      <h1 className="font-bold text-4xl border-4 border-black rounded-xl inline px-2 ">
        User Name
      </h1>

      <nav className="flex flex-col gap-5 mt-5 border-4 border-black rounded p-5 text-xl font-bold">
        <NavLink to="/user/zulquar">Zulquar</NavLink>
        <NavLink to="/user/zeeshan">Zeeshan</NavLink>
        <NavLink to="/user/jalal">Md Jalal</NavLink>
      </nav>

      <button
        className="px-2 mt-3 text-xl border-4 border-black rounded"
        onClick={handleBtn}
      >
        ⬅️ Back...
      </button>
      <hr />
      {/* <Outlet /> */}
    </div>
  );
}
