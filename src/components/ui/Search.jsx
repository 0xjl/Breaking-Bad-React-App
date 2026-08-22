import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className='search'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='search-bar'>
          <svg
            className='search-icon'
            viewBox='0 0 24 24'
            width='20'
            height='20'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <circle cx='11' cy='11' r='8' />
            <line x1='21' y1='21' x2='16.65' y2='16.65' />
          </svg>
          <input
            type='text'
            className='form-control'
            placeholder='Search characters…'
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
          {text && (
            <button
              type='button'
              className='search-clear'
              onClick={() => onChange('')}
              aria-label='Clear search'
            >
              ×
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Search;
