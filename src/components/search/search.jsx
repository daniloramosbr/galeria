
import { ContextJsx } from "../../context/context"
import Header from "../header/header"
import Homeone from "../homeone/homeone";
import axios  from "axios"
import { useContext, useEffect, useState } from "react";
import { Api } from "../api/api";
import './search.css'


export default function Search() {

  const {pesq} = useContext(ContextJsx)
 
const [photos, setPhotos] = useState([])
const [page, setPage] = useState(`https://api.pexels.com/v1/search?query=${pesq}&per_page=20`)
const [next, setNext] = useState('')
const [anter, setAnter] = useState('')


useEffect(()=> {

async function GetApi () {

  try {
    const res = await axios.get(`${page}`, {

      headers: {
        'Authorization': '434Rd4F4VUaUoxnO9l1JNFggllxGGvlvGTAqmuC2m9TFcWD6zsIAB8qj'
      }
    })
    setPhotos(res.data.photos)
    setNext(res.data.next_page)
    setAnter(res.data.prev_page)
    console.log(res.data)
    
  } catch (error) {
    console.log(error)
  }

}

GetApi()

},[page, pesq])

  return (
    <div className="container-home">
        <Header />
        <main className="main-home">

         
     {photos ? photos.map((photo)=> {

     
     return (
      <Homeone key={photo.id} img={photo.src.medium} creator={photo.photographer}/>
     )

     }) : <h1>
            Carregando...
            </h1>}

      </main>

      <div className="page">
     

       <button onClick={(()=>{
        setPage(anter)
       })}>ANTERIOR</button>

        <button className="number" onClick={(()=>{
        setPage(`https://api.pexels.com/v1/search?query=${pesq}&per_page=20`)
        })}>1</button>
         <button className="number" onClick={(()=>{
        setPage(`https://api.pexels.com/v1/search/?page=2&per_page=20&query=${pesq}`)
        })}>2</button>
        
        <button className="number" onClick={(()=>{
        setPage(  `https://api.pexels.com/v1/search/?page=3&per_page=20&query=${pesq}`  )
        })}>3</button>
        
        <button className="number" onClick={(()=>{
        setPage( `https://api.pexels.com/v1/search/?page=4&per_page=20&query=${pesq}`)
        })}>4</button>
        
        <button className="number" onClick={(()=>{
        setPage(`https://api.pexels.com/v1/search/?page=5&per_page=20&query=${pesq}`)
        })}>5</button>
         <button className="number" onClick={(()=>{
        setPage(`https://api.pexels.com/v1/search/?page=6&per_page=20&query=${pesq}`)
        })}>6</button>
        
        <button onClick={(()=> {
          setPage(next)
        })}>
          PRÓXIMA
        </button>

      </div>

    </div>
  );
}
