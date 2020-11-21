import { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=18314323-dd77e7beb5e3a73284a29660c&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container py-5">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ImageSearch searchText={(text) => setTerm(text)} />
          <div className="row">
            {images.map((image) => (
              <div key={image.id} className="col-md-4 mb-3">
                <ImageCard key={image.id} image={image} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
