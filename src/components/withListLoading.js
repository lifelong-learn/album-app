import React from 'react';

const WithListLoading = (Component) => {
  const WihLoadingComponent = ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };

  return WihLoadingComponent;
};

export default WithListLoading;