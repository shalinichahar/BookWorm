import React, { useState } from "react";
import "./App.css";

const bookDB = {
   javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
  ],

  fiction: [
    {
      name: "A walk to remember",
      rating: "4.5/5",
    },
    {
      name: "The girl with the dragon tattoo",
      rating: "5/5",
    },
  ],
  nonfiction: [
    {
      name: "Alchemist",
      rating: "3.5/5",
    },
    {
      name: "Tough times never last tough people do",
      rating: "5/5",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("nonfiction");
  const [selectedButton, setSelectedButton] = useState("nonfiction");

  function genreClickHandler(genre) {
    setGenre(genre);
    setSelectedButton(genre);
  }

  return (
    <div className="container">
      <h1 className="mt-5"> 📚  Booklet </h1>
      <p className="mt-3">Checkout my favorite books. Select a genre to get started</p>

      <div className="d-flex justify-content-center mt-3">
        {Object.keys(bookDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            className={`btn btn-outline-dark btn-lg mx-2 ${
              selectedButton === genre ? "active" : ""
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div className="row">
        <div className="col-lg-8">
          <ul className="list-unstyled">
            {bookDB[selectedGenre].map((book) => (
              <li
                key={book.name}
                className="bg-light p-3 my-2 rounded"
              >
                <h4 className="text-primary"> {book.name} </h4>
                <p className="text-secondary"> {book.rating} </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer mt-5 text-center">
        <h5 className="text-dark text-center"> &copy; | 2023 | shalini chahar</h5>
        <div>
          <a
            target="_blank"
            href="https://github.com/shalinichahar"
            className="fa fa-github text-dark mx-2"
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shalini-chahar-a93a0b185/"
            className="fa fa-linkedin text-dark mx-2"
          ></a>
          
          <a
            target="_blank"
            href="https://shalinichahar.github.io/My-Portfolio/"
            className="fa fa-google text-dark mx-2"
          ></a>
        </div>
      </div>
    </div>
  );
}
