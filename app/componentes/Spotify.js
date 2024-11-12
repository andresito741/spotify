import "./Spotify.css"
import Image from "next/image";


const menu = () =>{
    return(
        <div className="items-menu">
            <div className="logo">
                <Image className="icono"
                src="/imagenes/logo.png"
                height={100}
                width={120}
                
                // layout="fill"  
                objectFit="container"
                quality={100}
                />
            </div>
            <div className="menusito">
            <div className="menu"><span>Premium</span></div>
            <div className="menu"><span>Ayuda</span></div>
            <div className="menu"><span>Descargar</span></div>
            <div className="menu"><span>Registarse</span></div>
            <div className="menu"><span>Iniciar Sesion</span></div>
            </div>

        </div>
    )
}
export default menu