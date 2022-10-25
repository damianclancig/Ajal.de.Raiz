import React, { useState } from "react"
// import { AppContext } from "../../../context/AppContext"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import './Search.scss'

const Search = () => {

  // const { searchValue, setSearchValue } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('')

  const [searchView, setSearchView] = useState()

  const toggle = () => {
    setSearchView(true)
  }

  const closeSearch = () => (searchView === true ? setSearchView(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  const onSeachValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchValue);
    
    closeSearch()
  };

  return (
    <>
      <form onSubmit={handleSubmit}
        className={
          searchView === false
            ? "boton searchbar fadeOutWidth"
            : searchView === true
              ? "boton searchbar fadeInWidth"
              : "boton searchbar"
        }
      >
        {searchView === true && (
          <input
            id="inputSearchText"
            ref={ref}
            className="search-input"
            type="text"
            name=""
            value={searchValue}
            placeholder="Buscar productos..."
            onChange={onSeachValueChange} 
          />
        )}
        <div className="icon-bg">

          <FontAwesomeIcon
            onClick={toggle}
            className="search-icon"
            icon={faSearch}
          />
        </div>
      </form>
    </>

  )
}

export default Search
