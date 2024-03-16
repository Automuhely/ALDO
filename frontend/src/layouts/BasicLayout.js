import { Outlet } from "react-router-dom";
import MyNav from "../components/MyNav";

export default function BasicLayout() {
  return (
    <>
      <MyNav />
      <Outlet />
    </>
  );
}
