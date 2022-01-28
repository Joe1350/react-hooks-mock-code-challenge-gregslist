import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  const listingsToDisplay = listings.filter(listing => 
    listing.description.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter(listing => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  function handleSearchSubmit(searchValue) {
    setSearch(searchValue)
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit} />
      <ListingsContainer listings={listingsToDisplay} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
