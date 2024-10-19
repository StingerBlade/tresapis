function Nav() {
    return (
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="/insultos" style={styles.navLink}>API 1</a>
          </li>
          <li style={styles.navItem}>
            <a href="/api2" style={styles.navLink}>API 2</a>
          </li>
          <li style={styles.navItem}>
            <a href="/api3" style={styles.navLink}>API 3</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00796b',
      padding: '10px 0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
    navList: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      gap: '20px',
    },
    navItem: {},
    navLink: {
      color: '#fff', 
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'color 0.3s', 
    },
    navLinkHover: {
      color: '#e0f7fa', 
    },
  };
  