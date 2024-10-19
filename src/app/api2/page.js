'use client';

import { useState } from 'react';

export default function AdvicePage() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error al obtener el consejo:', error);
      setAdvice('No se pudo obtener un consejo. Intenta nuevamente.');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Consejo del Día! 💡</h1>
      <button style={styles.button} onClick={fetchAdvice}>
        {loading ? 'Cargando...' : 'Obtener Consejo'}
      </button>
      {advice && <p style={styles.advice}>"{advice}"</p>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#e0f7fa',
    fontFamily: 'Arial, sans-serif',
    color: '#333', // Color del texto general
  },
  title: {
    fontSize: '36px', // Tamaño de fuente más grande para el título
    color: '#00796b',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    marginTop: '20px',
    cursor: 'pointer',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#005b4d',
  },
  advice: {
    marginTop: '20px',
    fontSize: '24px',
    fontStyle: 'italic',
    color: '#333', // Color del texto del consejo
    textAlign: 'center',
    maxWidth: '600px',
    padding: '10px', // Espacio alrededor del texto
    backgroundColor: '#ffffff', // Fondo blanco para destacar el texto
    border: '1px solid #00796b', // Borde del cuadro
    borderRadius: '5px',
  },
};
