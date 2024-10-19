'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [insult, setInsult] = useState('');

  const fetchInsult = () => {
    fetch('https://insult.mattbas.org/api/insult')
      .then(response => response.text())
      .then(data => setInsult(data))
      .catch(error => console.error('Error fetching insult:', error));
  };

  useEffect(() => {
    fetchInsult();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Insulto del día! 🗯️</h1>
      <p style={{ fontSize: '24px', fontStyle: 'italic', color: '#555' }}>
        {insult || 'Cargando insulto...'}
      </p>
      <button 
        onClick={fetchInsult} 
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Cambiar Insulto
      </button>
    </div>
  );
}
