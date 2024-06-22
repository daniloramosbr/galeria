import "./search.scss";
import Header from "../header/header";
import Homeone from "../homeone/homeone";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Search() {

  const {search} = useParams();

  const [photos, setPhotos] = useState([]); //guarda dados da api

  useEffect(() => {
    async function GetApi() {
      try {
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=40`, {
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
  }, [search]);

  return (
    <div className="container-home">
      <Header />
     <h2 className="pesq">
      PESQUISANDO POR: {search}
     </h2>
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

    </div>
  );
}
