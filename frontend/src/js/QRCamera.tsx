import { useEffect, useRef } from 'react';

export const QRCamera = () => {
  let videoRef = useRef(null);

  const getUserCamera = () => {
    // @ts-ignore
    navigator.decodeFromInputVideoDevice() 
      .then((stream: any) => {
        //비디오 tag에 stream 추가
        let video = videoRef.current;

        // @ts-ignore
        video.srcObject = stream;
        // @ts-ignore
        video.play();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <div className="container">
      <video className="container" ref={videoRef}></video>
      {/* <iframe src="https://naver.com" allow="camera;microphone"></iframe> */}
    </div>
  );
};
