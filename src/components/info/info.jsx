import "./info.css";
import Header from "../header/header"
import { useContext } from "react";
import { ContextJsx } from "../../context/context";

export default function Info() {

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const {photo} = useContext(ContextJsx)
  return (
    <div className="cont-info">
      <Header/>
      <main className="info">
      <div className="img-cont">
      <img src={photo.url} />
       <h4> Criador: {photo.creator}</h4>
      </div>
      </main>
    </div>
  );
}
