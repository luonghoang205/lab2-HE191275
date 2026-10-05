import React, { useState, useMemo, useCallback, useContext } from 'react';
import Header from './components/Header';
import AddBar from './components/AddBar';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import useLocalStorage from './hooks/useLocalStorage';
import { ThemeContext } from './context/ThemeContext';
import { movies as initialMovies } from './datas/movies';

export default function App() {
  const { darkMode } = useContext(ThemeContext);
  const [movieList, setMovieList] = useLocalStorage('movies', initialMovies);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Thêm phim
  const handleAddMovie = useCallback((newMovieData) => {
    setMovieList((prev) => [{ id: Date.now(), ...newMovieData }, ...prev]);
  }, [setMovieList]);

  // Xóa phim
  const handleDeleteMovie = useCallback((id) => {
    setMovieList((prev) => prev.filter((m) => m.id !== id));
    if (selectedMovie && selectedMovie.id === id) {
      setSelectedMovie(null);
    }
  }, [setMovieList, selectedMovie]);

  // Lọc và Tìm kiếm
  const filteredMovies = useMemo(() => {
    return movieList.filter((movie) => {
      const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            movie.director.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [movieList, selectedGenre, searchTerm]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: darkMode ? '#222' : '#f4f4f9',
      color: darkMode ? '#fff' : '#333',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: darkMode ? '#333' : '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Header />
        <AddBar onAddMovie={handleAddMovie} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <GenreFilter selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />

        <MovieList
          movies={filteredMovies}
          onDeleteMovie={handleDeleteMovie}
          onSelectMovie={setSelectedMovie}
        />

        <MovieDetail 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      </div>
    </div>
  );
}