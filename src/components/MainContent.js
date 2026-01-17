import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main style={{ padding: '20px', minHeight: '70vh' }}>
      {children}
    </main>
  );
};

export default MainContent;