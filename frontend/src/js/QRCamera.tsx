import styled from '@emotion/styled';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

export const QRCamera = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <CloseButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={'/images/x_vector.png'} width={'20px'} />
        </CloseButton>
        <HeaderTitle>수거 코드 스캔</HeaderTitle>
      </Header>
      <Body>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {
            if (!!result) {
              navigate('/mission/completed');
            }
            if (!!error) {
              console.info(error);
            }
          }}
          containerStyle={{ width: '100%', marginTop: '35px', height: '380px' }}
        />
        <CameraTop>
          <img src={'/images/camera_top_1.png'} width={'20px'} />
          <img src={'/images/camera_top_2.png'} width={'20px'} />
        </CameraTop>
        <CameraCenter>
          <img src={'/images/camera_center.png'} width={'30px'} />
        </CameraCenter>
        <CameraBottom>
          <img src={'/images/camera_top_3.png'} width={'20px'} />
          <img src={'/images/camera_top_4.png'} width={'20px'} />
        </CameraBottom>
        <Footer>{`수거한 용기 뒷쪽의 큐알코드를\n스캔해주세요`}</Footer>
      </Body>
    </>
  );
};

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding-left: 32px;
  width: 100%;
  margin: 20px 0 20px 0;
`;

const CloseButton = styled.div`
  margin-right: 110px;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
`;

const Body = styled.div`
  width: 100%;
`;

const CameraTop = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 47%;
`;

const CameraCenter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 36%;
`;

const CameraBottom = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 24%;
`;

const Footer = styled.div`
  margin-top: 100px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  white-space: pre-line;
`;
