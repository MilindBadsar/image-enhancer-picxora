import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader color="indigo" size="lg" type="bars" />
    </div>
  );
};

export default Loading;
