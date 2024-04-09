import "./home.css";
import Header from "../header/header"
import Homeone from "../homeone/homeone";
import axios  from "axios"
import { useEffect, useState } from "react";
import { Api } from "../api/api";

export default function Home() {


const [photos, setPhotos] = useState([])
const [page, setPage] = useState('https://api.pexels.com/v1/curated?page=1&per_page=40')
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

},[page])

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
        setPage('https://api.pexels.com/v1/curated?page=1&per_page=40')
        })}>1</button>
         <button className="number" onClick={(()=>{
        setPage('https://api.pexels.com/v1/curated?page=2&per_page=40')
        })}>2</button>
        
        <button className="number" onClick={(()=>{
        setPage('https://api.pexels.com/v1/curated?page=3&per_page=40')
        })}>3</button>
        
        <button className="number" onClick={(()=>{
        setPage('https://api.pexels.com/v1/curated?page=4&per_page=40')
        })}>4</button>
        
        <button className="number" onClick={(()=>{
        setPage('https://api.pexels.com/v1/curated?page=5&per_page=40')
        })}>5</button>
         <button className="number" onClick={(()=>{
        setPage('https://api.pexels.com/v1/curated?page=6&per_page=40')
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
