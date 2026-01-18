import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main style={styles.mainContainer}>
      <div style={styles.contentWrapper}>
        {children}
      </div>
    </main>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: '#f4f7f6',
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box'
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }
};

export default MainContent;