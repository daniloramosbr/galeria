import "./home.scss";
import Header from "../header/header";
import Homeone from "../homeone/homeone";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
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
      } catch (error) {
        console.log(error);
      }
    }

    GetApi();
  }, [page]);

  const handlePreviousPage = () => {

    if (page == 1) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
    navigate(`/galeria/${page-1}`)
  };

  const handleNextPage = () => {
    setPage((nextPage) => nextPage + 1);
    navigate(`/galeria/${page+1}`)
  };

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
          <div>
            <div className="custom-loader"></div>
          </div>
        )}
      </main>
     {photos &&  <div className="pag">
      <button onClick={handlePreviousPage}><ion-icon name="chevron-back-outline"></ion-icon> ANTERIOR</button>
      <button onClick={handleNextPage}>PRÓXIMA <ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>}
    </div>
  );
}
