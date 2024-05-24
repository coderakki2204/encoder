// src/CustomToast.js
import React from 'react';

const CustomToast = ({ appearance, children }) => {
  const styles = {
    fontSize: '16px',
    textAlign: 'center',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    backgroundColor:
      appearance === 'error' ? '#f44336' :
      appearance === 'success' ? '#4caf50' :
      appearance === 'info' ? '#2196f3' : '#333',
    margin: '0 auto',
    maxWidth: '90%',
    wordBreak: 'break-word'
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

export default CustomToast;
