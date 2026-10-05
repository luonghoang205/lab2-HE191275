import React from 'react';

export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div style={{
      marginTop: '20px',
      padding: '15px',
      border: '1px solid #1890ff',
      borderRadius: '6px',
      backgroundColor: '#e6f7ff',
      color: '#000'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>{movie.title} ({movie.year})</h3>
        <button onClick={onClose} style={{ cursor: 'pointer' }}>Đóng</button>
      </div>
      <p><strong>Thể loại:</strong> {movie.genre}</p>
      <p><strong>Đánh giá:</strong> ⭐ {movie.rating} / 10</p>
      <p><strong>Đạo diễn:</strong> {movie.director}</p>
      <p><strong>Thời lượng:</strong> {movie.duration} phút</p>
      <p><strong>Mô tả:</strong> {movie.description}</p>
    </div>
  );
}