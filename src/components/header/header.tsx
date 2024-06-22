import "./header.scss"
import InputSearch from "../input/inputSearch";
import { useNavigate } from "react-router-dom";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="cont-header">
      <div className="img-ion" onClick={(()=>{
      navigate('/galeria')
    })}>
      <ion-icon name="image-outline"></ion-icon>
      <h1>GALERIA DE FOTOS</h1>
      </div>
       <div>
        <InputSearch/>
       </div>
    </div>
  )
}
