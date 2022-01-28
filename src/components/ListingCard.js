import React, {useState } from "react";

// "https://via.placeholder.com/300x300"

function ListingCard({ listing, onDeleteListing }) {
  const [favorite, setFavorite] = useState(false)

  function handleClick() {
    setFavorite(favorite => !favorite)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={handleClick}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={handleClick}
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
          onClick={handleDeleteClick}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
