import { Outlet } from "react-router-dom";
import MyNav from "../components/guest/MyNav";
import Footer from "../components/guest/Footer";
import useThemeContext from "../contexts/ThemeContext";

export default function BasicLayout() {
  const { darkTheme } = useThemeContext();

  return (
    <>
      <MyNav />
      <Outlet />
      <div className={`${darkTheme.footerBg} ${darkTheme.footerText}`}>
        <Footer></Footer>
      </div>
    </>
  );
}
