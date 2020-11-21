import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div
      className="card shadow-sm"
      style={{
        width: "18rem",
      }}
    >
      <img src={image.webformatURL} alt="" className="card-img-top img-fluid" />
      <div className="card-body">
        <h6 className="text-info text-center mb-2">Photo By {image.user}</h6>
        <h6>Views: {image.views}</h6>
        <h6>Downloads: {image.downloads}</h6>
        <h6>Likes: {image.likes}</h6>
        {tags.map((item, index) => (
          <span key={index} className="badge badge-pill badge-primary mr-2">
            #{item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
