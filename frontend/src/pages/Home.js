import { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import Footer from "../components/Footer";
import Kepek from "../components/Kepek";

export default function Home() {
  const { user, getUser } = useAuthContext();
  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const obj = [
    {
      link: "/akkumulatorcsere",
      src: "img/Akkumulator_csere.jpg",
      title: "Akkumulátor csere",
    },
    { link: "#Futómű", src: "img/futomubeallítas.jpg", title: "Futómű" },
    {
      link: "#Időszakos szerviz",
      src: "img/időszakos szerviz.jpg",
      title: "Időszakos szerviz",
    },
    { link: "#Klíma", src: "img/Klíma.jpg", title: "Klíma" },
    {
      link: "#Ingyenes műszaki felmérés",
      src: "img/atvizsgalas.jpg",
      title: "Ingyenes műszaki felmérés",
    },
    { link: "#Fékrendszer", src: "img/fekcsere.jpg", title: "Fékrendszer" },
    { link: "#Gumicsere", src: "img/gumicsere.jpg", title: "Gumicsere" },
    { link: "#Kipufogó", src: "img/kipufogó.jpg", title: "Kipufogó" },
    {
      link: "#Műszaki vizsga",
      src: "img/muszaki vizsga.jpg",
      title: "Műszaki vizsga",
    },
  ];

  return (
    <div className="kartyak">
      <Kepek obj={obj} />
      <Footer></Footer>
    </div>
  );
}
