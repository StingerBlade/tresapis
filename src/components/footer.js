function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.content}>
          <p style={styles.text}>
            © {new Date().getFullYear()} Angel David Arras Orozco
          </p>
          <ul style={styles.socialList}>
            <li>
              <a href="https://facebook.com" target="_blank" style={styles.socialLink}>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" style={styles.socialLink}>
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" style={styles.socialLink}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
  const styles = {
    footer: {
      backgroundColor: '#343a40', 
      padding: '20px 0',
      position: 'fixed',
      width: '100%',
      bottom: 0,
      boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    text: {
      color: '#f8f9fa',
      margin: 0,
      fontSize: '14px',
    },
    socialList: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      gap: '15px',
    },
    socialLink: {
      color: '#f8f9fa',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s',
    },
    socialLinkHover: {
      color: '#00796b', 
    },
  };
  