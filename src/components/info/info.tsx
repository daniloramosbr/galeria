import "./info.scss";
import Header from "../header/header"
import { useContext } from "react";
import { ContextJsx } from "../../context/context";

export default function Info() {

  const {photo} = useContext(ContextJsx)
  
  return (
    <div className="cont-info">
      <Header/>
      <div className="img-cont">
      <img src={photo.url}/>
       <h4> Criador: {photo.creator}</h4>
       <p>{photo.desc}</p>
      </div>
    </div>
  );
}
