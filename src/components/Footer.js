import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <p style={styles.text}> Impulsando la transformación digital con React 18. </p>
        </div>
        
        <div style={styles.section}>
          <p style={styles.copyright}>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '40px 0 20px 0',
    marginTop: 'auto',
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  section: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  title: {
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
    letterSpacing: '1px'
  },
  text: {
    fontSize: '0.9rem',
    color: '#bbb',
    margin: 0
  },
  copyright: {
    fontSize: '0.8rem',
    color: '#777',
    borderTop: '1px solid #333',
    paddingTop: '20px',
    width: '100%',
    minWidth: '300px'
  }
};

export default Footer;