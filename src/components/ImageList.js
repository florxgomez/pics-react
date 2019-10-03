import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  const { images } = props;
  const imagesList = images.map((image) => {
    return <ImageCard image={image} key={image.id}  />;
  });
  return <div className="image-list">{imagesList}</div>;
};

export default ImageList;
