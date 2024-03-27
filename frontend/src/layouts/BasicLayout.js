import { Outlet } from "react-router-dom";
import MyNav from "../components/MyNav";
import Nav from "react-bootstrap/Nav";


export default function BasicLayout() {
  return (
    <>
      <MyNav />
      <Outlet />
    </>
  );
}
