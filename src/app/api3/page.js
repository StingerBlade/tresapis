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
      <div>
        <h1>Fox Image</h1>
        <button onClick={fetchFoxImage}>
          {loading ? '...' : '↺'}
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          foxImage && <img src={foxImage} width={300} height={300} alt="Random Fox" />
        )}
      </div>
    </div>
  );
}

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};