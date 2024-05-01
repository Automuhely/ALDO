import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import PhotoAlbum from "react-photo-album";
import { Container } from "react-bootstrap";


export default function Galeria() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  
const photos = [
  { src: "/img/Akkumulator_csere.jpg", width: 1400, height: 1000 },
  { src: "/img/atvizsgalas.jpg", width: 1600, height: 900 },
  { src: "/img/fekcsere.jpg", width: 1800, height: 900 },
  { src: "/img/futomubeallítas.jpg", width: 1600, height: 600 },
  { src: "/img/gumicsere.jpg", width: 1400, height: 900 },
  { src: "/img/időszakos szerviz.jpg", width: 1600, height: 1200 },
  { src: "/img/kipufogó.jpg", width: 800, height: 600 },
  { src: "/img/Klíma.jpg", width: 1600, height: 900 },
  { src: "/img/munkadijak.jpg", width: 1600, height: 1600 },
  { src: "/img/muszaki vizsga.jpg", width: 1200, height: 900 },
  { src: "/img/olajcsere.jpg", width: 1600, height: 1200 },
  { src: "/img/1.jpg", width: 1600, height: 1200 },
  { src: "/img/2.jpg", width: 1200, height: 900 },
  { src: "/img/3.jpg", width: 800, height: 600 },
  { src: "/img/4.jpg", width: 1600, height: 1600 },
  { src: "/img/5.jpg", width: 800, height: 600 },
  { src: "/img/6.jpg", width: 1200, height: 900 },
  { src: "/img/7.jpg", width: 1600, height: 1200 },
  { src: "/img/8.jpg", width: 1600, height: 1200 },
  { src: "/img/9.jpg", width: 1400, height: 900 },
  { src: "/img/10.jpg", width: 1400, height: 1000 },
  { src: "/img/11.jpg", width: 1600, height: 900 },
  { src: "/img/12.jpg", width: 1800, height: 900 },
  { src: "/img/13.jpg", width: 1600, height: 600 },
  { src: "/img/14.jpg", width: 1400, height: 900 },
  { src: "/img/15.jpg", width: 1600, height: 1200 },
  
];

  return (
    
      <Container >
        <PhotoAlbum layout="rows" photos={photos}  />
      </Container>
    
  );
}
