import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import enhancedImageApi from "../utils/enhancedImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (image) => {
    setUploadImage(URL.createObjectURL(image));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageApi(image);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <ImageUpload handleImageUpload={handleImageUpload} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
