import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [username, setUsername] = useState('John Doe');
  const [bio, setBio] = useState('Hello, I am learning React!');
  
  const handleSave = () => {
    // Сюда можно добавить логику для сохранения данных
    alert('Profile updated!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <h1 style={styles.header}>Мой профиль</h1>

        <div style={styles.profileInfo}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Имя пользователя</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Биография</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              style={styles.textarea}
            />
          </div>

          <button onClick={handleSave} style={styles.button}>Сохранить изменения</button>
        </div>

        
      </div>
    </div>
  );
};

// Встроенные стили
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
  },
  profileContainer: {
    maxWidth: '800px',
    width: '100%',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: '600',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '1.1rem',
    color: '#555',
  },
  input: {
    padding: '15px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  textarea: {
    padding: '15px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    fontSize: '1rem',
    minHeight: '150px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Profile;
