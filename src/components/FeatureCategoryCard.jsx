import React from "react";

function FeatureCategoryCard({image, title}) {
  // const trimmedTitle = title.length > 15 ? title.substring(0, 15) + "..." : title;

  return (
    <div className="product-container text-center align-items-center d-flex align-items-center flex-column">
      <img src={image} alt={title} className="pro-img mb-3" />
      <p className="mb-0">{title}</p>
    </div>
  );
}

export default FeatureCategoryCard;
