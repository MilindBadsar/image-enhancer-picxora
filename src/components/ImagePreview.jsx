import React from "react";
import Loading from "./Loading";

function ImagePreview(props) {
  const handleDownload = () => {
    if (props.enhanced) {
      const link = document.createElement("a");
      link.href = props.enhanced;
      link.download = "enhanced-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="bg-gray-800 text-xl font-semibold text-center text-white py-2">
          Original Image
        </h2>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-60 bg-white">
            No image selected
          </div>
        )}
      </div>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="bg-blue-600 text-xl font-semibold text-center text-white py-2">
          Enhanced Image
        </h2>

        {props.enhanced && !props.loading && (
          <div className="relative">
            <img
              src={props.enhanced}
              alt=""
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleDownload}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Download
            </button>
          </div>
        )}

        {props.loading && <Loading />}
      </div>
    </div>
  );
}

export default ImagePreview;
