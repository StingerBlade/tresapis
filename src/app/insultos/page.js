'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [insult, setInsult] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchInsult = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://insult.mattbas.org/api/insult');
      const data = await response.text();
      setInsult(data);
    } catch (error) {
      console.error('Error fetching insult:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInsult();
  }, []);

  return (
    <div style={styles.container}>
      <h1>¡Insulto del día! 🗯️</h1>
      <p style={styles.insultText}>
        {loading ? 'Cargando insulto...' : insult}
      </p>
      <button
  onClick={fetchInsult}
  style={{ ...styles.button, ...(loading ? {} : styles.buttonHover) }}
  disabled={loading}
>
  {loading ? '...' : '↻ Cambiar Insulto'}
</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  insultText: {
    fontSize: '24px',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
};
