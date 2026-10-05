import React, { useState } from 'react';

export default function AddBar({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Sci-Fi');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      title: title.trim(),
      genre,
      year: Number(year) || new Date().getFullYear(),
      rating: Number(rating) || 7.0,
      director: 'Chưa rõ',
      duration: 120,
      description: 'Chưa có mô tả'
    };

    onAddMovie(newMovie);
    setTitle('');
    setYear('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '8px', marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Tên phim..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px' }}
      />
      <div style={{ display: 'flex', gap: '8px' }}>
        <select value={genre} onChange={(e) => setGenre(e.target.value)} style={{ flex: 1, padding: '8px' }}>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Animation">Animation</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
        </select>
        <input
          type="number"
          placeholder="Năm (VD: 2024)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <input
          type="number"
          step="0.1"
          placeholder="Điểm (VD: 8.5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>Thêm</button>
      </div>
    </form>
  );
}