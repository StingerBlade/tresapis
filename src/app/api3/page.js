'use client';

import { useState } from 'react';

export default function FoxPage() {
  const [foxImage, setFoxImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFoxImage = async () => {
    setLoading(true);
    const res = await fetch('https://randomfox.ca/floof/');
    const data = await res.json();
    setFoxImage(data.image);
    setLoading(false);
  };

  return (
    <div style={styles.content}>
      <h1>Fox Image</h1>
      <button onClick={fetchFoxImage} style={styles.button} disabled={loading}>
        {loading ? '...' : '↻'}
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        foxImage && <img src={foxImage} width={300} height={300} alt="Random Fox" />
      )}
    </div>
  );
}

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};
