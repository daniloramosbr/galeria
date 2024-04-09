import { useContext, useState } from "react"
import "./inputSearch.css"
import { useNavigate } from "react-router-dom"
import { ContextJsx } from "../../context/context"

export default function InputSearch() {

  const navigate = useNavigate()

const [search, setSearch] = useState("")
const {setPesq} = useContext(ContextJsx)

const HandleChange = (event) => {
  setSearch(event.target.value);
}

  return (
    <div className="cont-input">

      <form>
        <input type="text" placeholder="Pesquisar" onChange={HandleChange} className="input-search"/>
      </form>

      <button className="button" onClick={()=> {
      if (!search) {
        return
      }
      setPesq(search)
       navigate(`/search?q=${search}`)
       setSearch('')
      }}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  )
}
