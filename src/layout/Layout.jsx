import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center pt-32 md:pt-28">
        <Outlet />
      </div>
    </div>
  );
}
