import React from "react";

const ImageList = props => {
  const { images } = props;
  const imagesList = images.map(({description, id, urls}) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });
  return <div>{imagesList}</div>;
};

export default ImageList;
