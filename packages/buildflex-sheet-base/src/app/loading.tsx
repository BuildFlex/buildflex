import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { IRootState } from '../store';

const Loading = () => {
  const isLoading = useSelector((state: IRootState) => state.theme.isLoading);

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default Loading;
