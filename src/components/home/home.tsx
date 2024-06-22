import "./home.scss";
import Header from "../header/header";
import Homeone from "../homeone/homeone";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState([]); //guarda dados da api
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function GetApi() {
      //faz requisiçao a api

      try {
        const res = await axios.get(`https://api.pexels.com/v1/curated?page=${page}&per_page=40`, {
          headers: {
            Authorization: '434Rd4F4VUaUoxnO9l1JNFggllxGGvlvGTAqmuC2m9TFcWD6zsIAB8qj'
          },
        });
        setPhotos(res.data.photos);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    GetApi();
  }, [page]);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((nextPage) => nextPage + 1);
  };

console.log(page)
  return (
    <div className="container-home">
      <Header />
      <main className="main-home">
        {photos ? (
          photos.map((photo: any) => {
            return (
              <Homeone
                key={photo.id}
                img={photo.src.medium}
                creator={photo.photographer}
                alt={photo.alt}
              />
            );
          })
        ) : (
          <h1>Carregando...</h1>
        )}
      </main>
      <div className="pag">
      <button onClick={handlePreviousPage}><ion-icon name="chevron-back-outline"></ion-icon> ANTERIOR</button>
      <button onClick={handleNextPage}>PRÓXIMA <ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
    </div>
  );
}
