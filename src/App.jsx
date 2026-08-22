import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import characters from './data/characters.json';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filtered = characters.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setItems(filtered);
    setIsLoading(false);
  }, [query]);

  return (
    <>
      <div className='container'>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </>
  );
};

export default App;
