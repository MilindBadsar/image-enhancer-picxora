import React from "react";

const ImageUpload = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full border-2 border-dashed rounded-lg p-6 cursor-pointer text-center border-gray-300 hover:border-blue-400 transition-all duration-200"
      >
        <input type="file" id="fileInput" className="hidden" />
        <p className="text-lg text-gray-600">
          Click here or drag here your image to upload
        </p>
      </label>
    </div>
  );
};

export default ImageUpload;
