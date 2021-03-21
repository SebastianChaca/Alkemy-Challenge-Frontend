import React from 'react';
import Header from '../../Components/Layout/Header';

const UiComponents = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default UiComponents;
