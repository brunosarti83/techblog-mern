/* eslint-disable react/prop-types */
export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold cursor-pointer">TechBlog - MERN</h1>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
