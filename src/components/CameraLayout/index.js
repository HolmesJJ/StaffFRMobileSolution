import React, { useEffect } from "react";

// Antd Mobile
import { Toast } from "antd-mobile";

// Components
import { InfoContainer } from "../../components";

// Config
import { constraints } from "../../config/global";

// Styling
import "./index.css";

const CameraLayout = ({ onCapture }) => {
  useEffect(() => {
    initCamera();
  }, []);

  const hasGetUserMedia = () => {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };

  const initCamera = async () => {
    if (hasGetUserMedia) {
      const video = document.querySelector("video");
      try {
        video.srcObject = await navigator.mediaDevices.getUserMedia(
          constraints
        );
      } catch (err) {
        Toast.fail(err.name, 1);
      }
    } else {
      Toast.fail("This browser doesn't support user media!", 1);
    }
  };

  const handleScreenshot = () => {
    const img = document.querySelector("img");
    const canvas = document.createElement("canvas");
    const video = document.querySelector("video");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    img.src = canvas.toDataURL("image/webp");

    if (img.src.split(":")[1].length > 2) {
      onCapture(img.src.split(":")[1]);
    } else {
      Toast.fail("Upload failed!", 1);
    }
  };

  return (
    <div>
      <video autoPlay playsInline className="player-container" />
      <InfoContainer text="Please Take Picture" />
      <div className="camera-button" onClick={onCapture} />
      <img src="" alt="" style={{ display: "none" }} />
      <canvas style={{ display: "none" }} />
    </div>
  );
};

export default CameraLayout;
