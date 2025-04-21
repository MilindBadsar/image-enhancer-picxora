import axios from "axios";

const enhancedImageApi = async (image) => {
  try {
    const taskId = await uploadImage(image);
    console.log("Image uploaded successfully. Task ID:", taskId);

    const enhancedImageURL = await PollingForEnhancedImage(taskId);
    console.log("Enhanced image URL:", enhancedImageURL);
    return enhancedImageURL;
  } catch (error) {
    console.log("Error in enhancing image:", error.message);
  }
};

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image_file", image);

  const { data } = await axios.post(
    "https://techhk.aoscdn.com/api/tasks/visual/scale",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-Key": process.env.PICWISH_API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image. Please try again.");
  }

  return data.data.task_id;
};

const PollingForEnhancedImage = async (taskId, retries = 0) => {
  const result = fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log("Processing...");

    if (retries >= 20) {
      throw new Error("Max retries reached. Please try again.");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollingForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced image is ready:", result);
  return result;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `https://techhk.aoscdn.com/api/tasks/visual/scale/${taskId}`,

    {
      headers: {
        "X-API-Key": process.env.PICWISH_API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image. Please try again.");
  }

  return data.data;
};

export default enhancedImageApi;
