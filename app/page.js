import Image from "next/image";
import Navbar from "./componentes/Navbar";
import Spotify from "./componentes/Spotify"
import Imagen from "./componentes/Imagen"


export default function layout() {
  return (
    <div>
      <Navbar />
      <Spotify/>
      <Imagen/>

    </div>
  );
}
