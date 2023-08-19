import { useEffect, useRef } from 'react';

export const QRCamera = () => {
  let localstream: any;

  useEffect(() => {
    let vid = document.getElementById('vid');
    if (navigator.mediaDevices.getUserMedia !== null) {
      var options = {
        video: true,
        audio: true,
      };
      // @ts-ignore
      navigator.getUserMedia(
        options,
        function (stream: any) {
          // @ts-ignore
          vid.srcObject = stream;
          localstream = stream;
          // @ts-ignore
          vid.play();
          console.log(stream, 'streaming');
        },
        function (e: any) {
          console.log('background error : ' + e.name);
        },
      );
    }
  });

  const capOff = () => {
    let vid = document?.getElementById('vid');
    if (vid) {
      // @ts-ignore
      vid.pause();
      // @ts-ignore
      vid.src = '';
    }
    localstream?.getTracks()?.forEach((x: any) => x.stop());
    console.log('all capture devices off');
  };

  const camON = () => {
    let vid = document.getElementById('vid');
    if (navigator.mediaDevices.getUserMedia !== null) {
      var options = {
        video: true,
        audio: true,
      };
      // @ts-ignore
      navigator.getUserMedia(
        options,
        function (stream: any) {
          // @ts-ignore
          vid.srcObject = stream;
          localstream = stream;
          // @ts-ignore
          vid.play();
          console.log(stream, 'streaming');
        },
        function (e: any) {
          console.log('background error : ' + e.name);
        },
      );
    }
  };

  return (
    <div>
      <div>
        <div>
          <video id="vid" height="120" width="160" autoPlay></video>
          <br />
          <button onClick={capOff}>Turn Capture Off</button>
          <button onClick={camON}>Turn Capture ON</button>
        </div>
      </div>
    </div>
  );
  // let videoRef = useRef(null);

  // const getUserCamera = () => {
  //   // @ts-ignore
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: true,
  //     })
  //     .then((stream) => {
  //       //비디오 tag에 stream 추가
  //       let video = videoRef.current;

  //       // @ts-ignore
  //       video.srcObject = stream;
  //       // @ts-ignore
  //       video.play();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getUserCamera();
  // }, [videoRef]);

  // return (
  //   <div className="container">
  //     <h1>selfie App in React.js</h1>
  //     hello world
  //     <video className="container" ref={videoRef}></video>
  //   </div>
  // );
};
