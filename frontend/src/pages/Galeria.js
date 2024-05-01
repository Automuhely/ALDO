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
  
];

  return (
    
      <Container style={{ margin:"3rem" }}>
        <PhotoAlbum layout="columns" photos={photos} />
      </Container>
    
  );
}
