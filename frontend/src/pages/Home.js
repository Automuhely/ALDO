import { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function Home() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <>
      <div>Főoldal</div>
      {/* <p>Bejelentkezett felhasználó: {user?.name}</p> */}
    </>
  );
}
