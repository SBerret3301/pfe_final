import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo or Home icon */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>🏠</Link>
        </div>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1rem',
          margin: 0,
          padding: 0
        }}>
          <li><Link to="/articles" style={linkStyle}></Link></li>
          <li><Link to="/profile" style={linkStyle}>👤 Profile</Link></li>
          <li><Link to="/login" style={linkStyle}>🔐 Login</Link></li>
          <li><Link to="/register" style={linkStyle}>📝 Register</Link></li>
        
        </ul>
      </nav> 
      
    
    </header>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  transition: 'color 0.2s',
};

export default Header;
