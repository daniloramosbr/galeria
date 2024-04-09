import "./homeone.css"
import { useNavigate } from "react-router-dom";
import { ContextJsx } from "../../context/context";
import { useContext, useState } from "react";

export default function Homeone({img, creator}) {

  const navigate = useNavigate()
    const {photo, setPhoto} = useContext(ContextJsx)
  
  return (
    <div className="cont-homeone" onClick={(()=>{
      let res = {
        url: img,
        creator: creator
      }
      navigate('/info')
      setPhoto(res)
      console.log(photo)
      
    })}>
      <img src={img}/>
    </div>
  )
}
