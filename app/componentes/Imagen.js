import layout from "../page";
import "./Imagen.css";
import Image from "next/image";


const fondo_img = () =>{
    return(
        <div className="fondo">
            
           <div className="izquierda">

            
            <div className="disfruta"><p>
                Disfruta de tu contenido favorito sin límites. Prueba Premium Individual gratis durante 2 meses.
                </p>
            </div>
            <div className="precio">
                <span>Después, solo 16.900 COP/mes. Cancela cuando quieras.</span>

            </div>
            <div className="botones">
                <a className="prueba" href="https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fwww.spotify.com%2Fco-es%2Fpurchase%2Foffer%2F2024-q4-latam-intro-trial-2m%2F%3Fcountry%3DCO"><strong>Probar gratis durante 2 meses</strong></a>
                <a className= "planes" href=""><strong>Ver todos los planes</strong></a>


            </div>
            <div className="terminos">
                <p>
                Solo para Premium Individual. Gratis por 2 meses. Después, cuesta COP 16 900 al mes. La <br/> oferta solo está disponible si aún no probaste Premium. Se aplican Términos.<br/>
                La oferta termina el 10 de noviembre de 2024.
                </p>

            </div>

           </div>
           {/* <div className="audifono">
            <Image
            src={"/imagenes/audifonos.jpg"}
            width={120}
            height={100} */}
          
            

            {/* />
           </div> */}
           {/* <div className="derecha"> 

           </div> */}

        </div>
    )
}

export default fondo_img