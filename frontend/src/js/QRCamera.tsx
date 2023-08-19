import { useEffect, useRef } from 'react';

export const QRCamera = () => {
  let videoRef = useRef(null);

  const getUserCamera = () => {
    // @ts-ignore
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: 'environment' },
      })
      .then((stream) => {
        //비디오 tag에 stream 추가
        let video = videoRef.current;

        // @ts-ignore
        video.srcObject = stream;
        // @ts-ignore
        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <div className="container">
      <video className="container" ref={videoRef}></video>
    </div>
  );
};
