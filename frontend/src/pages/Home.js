import { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import useThemeContext from "../contexts/ThemeContext";

export default function Home() {
  const { user, getUser } = useAuthContext();
  const { setDarkTheme, darkTheme } = useThemeContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <>
      <div className="text-center" style={darkTheme}>
        <div>Főoldal</div>
        <button
          onClick={() => {
            setDarkTheme((prevState) => !prevState);
          }}
        >
          Nyomd meg
        </button>
        <div>Ez itt egy doboz egy szöveggel.</div>
      </div>
      {/* <p>Bejelentkezett felhasználó: {user?.name}</p> */}
    </>
  );
}
