import styled from '@emotion/styled';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

export const QRCamera = () => {
  const navigate = useNavigate();

  return (
    <>
      <CloseButton>✖︎</CloseButton>
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
        containerStyle={{ width: '100%' }}
      />
    </>
  );
};

const Header = styled.div``;

const CloseButton = styled.div``;
