import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../style.scss";

function Stars() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };
  return (
    <>
      <p className="Rate">Niveau de préférence</p>
      <Rating
        transition
        size={35}
        allowFraction
        fillColor="#E9AFAE"
        onClick={handleRating}
        ratingValue={rating}
      ></Rating>
    </>
  );
}

export default Stars;