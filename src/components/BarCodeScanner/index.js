import React, { useEffect } from "react";
import Quagga from "quagga";

// Antd Mobile
import { Toast } from "antd-mobile";

// Components
import { InfoContainer } from "../../components";

// config
import { barCodeConstraint } from "../../config/global";

const BarCodeScanner = ({ onDetected }) => {
  useEffect(() => {
    initCamera();
    return () => Quagga.offDetected(_onDetected);
  }, []);

  const hasGetUserMedia = () => {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };

  const initCamera = async () => {
    if (!hasGetUserMedia) {
      Toast.fail("This browser doesn't support user media!",1);
    } else {
      _initQuagga();
    }
  };

  const _initQuagga = () => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          ...barCodeConstraint
        },
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        numOfWorkers: 4,
        decoder: {
          readers: ["ean_reader", "codabar_reader"]
        },
        debug: {
          drawBoundingBox: true,
          drawScanline: true,
          showPattern: true,
          showFrequency: true
        },
        multiple: true,
        locate: true
      },
      function(err) {
        if (err) {
          return Toast.fail(err.message, 1);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(_onDetected);
  };

  const _onDetected = result => onDetected(result);

  return (
    <div>
      <div id="interactive" className="viewport" />
      <InfoContainer text="Please Scan Barcode" />
    </div>
  );
};

export default BarCodeScanner;
