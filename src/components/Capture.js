import React, { useRef, useState } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  const openCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    setImageData(dataURL);
    video.srcObject.getTracks().forEach((track) => track.stop());
  };

  return (
    <div className="relative text-center">
      {!imageData ? (
        <>
          <video ref={videoRef} className="w-full max-w-md mx-auto mb-4" />
          <button
            onClick={openCamera}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2"
          >
            Open Camera
          </button>
          <button
            onClick={captureImage}
            className="bg-green-500 text-white px-4 py-2 rounded m-2"
          >
            Capture Image
          </button>
        </>
      ) : (
        <div className="relative inline-block">
          <img src={imageData} alt="Captured" className="w-full max-w-md" />
          <button
            onClick={() => alert('Check related product')}
            className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Related Product
          </button>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default CameraCapture;
