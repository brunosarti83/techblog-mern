/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-800 text-white p-5">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          TechBlog - MERN
        </h1>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
