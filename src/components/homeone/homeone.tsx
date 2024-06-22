import "./homeone.scss"
import { useNavigate } from "react-router-dom";
import { ContextJsx } from "../../context/context";
import { useContext } from "react";

interface info {
  img: string;
  creator: string;
  alt: string;
}

export default function Homeone({img, creator, alt}: info) {

  const navigate = useNavigate()
    const {photo, setPhoto} = useContext(ContextJsx)
  
  return (
    <div className="cont-homeone" onClick={(()=>{
      let res = {
        url: img,
        creator: creator,
        desc: alt
      }
      navigate('/info')
      setPhoto(res)
      
    })}>
      <img src={img}/>
    </div>
  )
}
