import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (items.length === 0) {
    return <p className='no-results'>No characters match your search.</p>;
  }

  return (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} {...item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
