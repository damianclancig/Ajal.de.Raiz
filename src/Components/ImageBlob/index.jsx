import React from "react";
import useBlobUrl from "../../hooks/useBlobUrl";

const ImageBlob = ({ src, alt, ...rest }) => {
  const blobSrc = useBlobUrl(src);

  return <img src={blobSrc} alt={alt} {...rest} />;
};

export default ImageBlob;
