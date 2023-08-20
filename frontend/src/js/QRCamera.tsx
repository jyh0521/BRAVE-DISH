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
        <HeaderTitle>QR code scanning</HeaderTitle>
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
          containerStyle={{ width: '100%', marginTop: '25%' }}
        />
        <CameraCenter>
          <img src={'/images/camera_center.png'} width={'30px'} />
        </CameraCenter>
        <Footer>{`Scan the QR code on the back of the collected dish`}</Footer>
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
  margin-right: 64px;
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

const CameraCenter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 32%;
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
  position: relative;
  bottom: 20%;
`;
