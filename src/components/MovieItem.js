import React from 'react';

export default function MovieItem({ movie, onDeleteMovie, onSelectMovie }) {
  return (
    <div style={{
      borderBottom: '1px solid #eee',
      padding: '12px 0',
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center'
    }}>
      <div 
        onClick={() => onSelectMovie && onSelectMovie(movie)}
        style={{ cursor: 'pointer', flex: 1 }}
      >
        <h4 style={{ margin: '0 0 5px 0' }}>
          {movie.title} <span style={{ fontSize: '12px', color: '#888' }}>({movie.year})</span>
        </h4>
        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
          <strong>{movie.genre}</strong> | ⭐ {movie.rating} | Đạo diễn: {movie.director} | ⏱ {movie.duration} phút
        </p>
      </div>

      <button
        onClick={() => onDeleteMovie(movie.id)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#ff4d4f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Xóa
      </button>
    </div>
  );
}