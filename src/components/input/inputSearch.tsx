import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./inputSearch.scss"


export default function InputSearch() {

  const navigate = useNavigate()

const [search, setSearch] = useState("")        //input de pesquisa

const HandleChange = (event:any) => {
  setSearch(event.target.value);
}

  return (
    <div className="cont-input">

      <form>
        <input type="text" placeholder="Pesquisar" onChange={HandleChange} className="input-search"/>
      </form>

      <button className="button" onClick={()=> {
      if (!search) {
        return alert('insira algo para pesquisar')
      }
       navigate(`/search/${search}`)
       setSearch('')
      }}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  )
}
