import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css';
// import backgroundImage from '../images/фон3.jpg';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ genre: '', author: '', year: '' });
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [years, setYears] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/subjects/fiction.json`);
        setBooks(response.data.works || []);

        // Извлекаем жанры, авторов и годы из данных
        const uniqueGenres = [...new Set(response.data.works.flatMap(book => book.subjects || []))];
        const uniqueAuthors = [...new Set(response.data.works.flatMap(book => book.authors?.map(a => a.name) || []))];
        const uniqueYears = [...new Set(response.data.works.map(book => book.first_publish_year))].filter(y => y);

        setGenres(uniqueGenres);
        setAuthors(uniqueAuthors);
        setYears(uniqueYears);
      } catch (error) {
        console.error('Ошибка загрузки книг:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilterChange = (e) => setFilter({ ...filter, [e.target.name]: e.target.value });
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter.genre ? book.subjects?.includes(filter.genre) : true) &&
    (filter.author ? book.authors?.some(a => a.name === filter.author) : true) &&
    (filter.year ? book.first_publish_year == filter.year : true)
  );

  return (
    <div className="booklist-container">
      <div className="background">
        <img src={backgroundImage} alt="Фон" className="background-image" />
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск книг..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        <button className="filter-button" onClick={toggleFilter}>
          Фильтр
        </button>

        {isFilterOpen && (
          <div className="filter-popup">
            <button className="close-button" onClick={toggleFilter}>×</button>
            <label>Жанр:</label>
            <select name="genre" onChange={handleFilterChange} value={filter.genre}>
              <option value="">Все жанры</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>

            <label>Автор:</label>
            <select name="author" onChange={handleFilterChange} value={filter.author}>
              <option value="">Все авторы</option>
              {authors.map(author => (
                <option key={author} value={author}>{author}</option>
              ))}
            </select>

            <label>Год:</label>
            <select name="year" onChange={handleFilterChange} value={filter.year}>
              <option value="">Все годы</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.key} className="book-item">
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.authors?.map(a => a.name).join(', ') || 'Автор неизвестен'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
