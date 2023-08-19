// import { useEffect, useRef } from 'react';

// export const QRCamera = () => {
// let videoRef = useRef(null);
// const getUserCamera = () => {
//   // @ts-ignore
//   navigator.mediaDevices
//     .getUserMedia({
//       video: { facingMode: 'environment' },
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
// return <video style={{ width: '100px', height: '100px' }} ref={videoRef}></video>;
// };

// import { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// export const QRCamera = () => {
//   const [data, setData] = useState('No result');

//   return (
//     <>
//       <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             // @ts-ignore
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         // @ts-ignore
//         style={{ width: '100%' }}
//       />
//       <p>{data}</p>
//     </>
//   );
// };

import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const QRCamera = () => {
  const [data, setData] = useState<any>('No result');

  return (
    <>
      <QrReader
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result);
            // console.log(result);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};
