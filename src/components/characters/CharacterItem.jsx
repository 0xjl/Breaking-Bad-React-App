import React, { useState } from 'react';

const join = (value) => (Array.isArray(value) ? value.join(', ') : value);

const CharacterItem = ({
  img,
  name,
  portrayed,
  nickname,
  birthday,
  status,
  occupation,
  appearance,
}) => {
  const [revealed, setRevealed] = useState(false);

  const toggle = () => setRevealed((prev) => !prev);

  return (
    <div
      className={`card${revealed ? ' revealed' : ''}`}
      role='button'
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <img
        className='card-img'
        src={img}
        alt={`Portrait of ${name}, a Breaking Bad cast member`}
        loading='lazy'
      />
      <div className='card-tag'>
        <h2>{name}</h2>
        <span
          className={`status status-${status?.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {status}
        </span>
      </div>
      <div className='card-details'>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Actor</strong> {portrayed}
          </li>
          <li>
            <strong>Nickname</strong> {nickname}
          </li>
          <li>
            <strong>Occupation</strong> {join(occupation)}
          </li>
          <li>
            <strong>Birthday</strong> {birthday}
          </li>
          <li>
            <strong>Status</strong> {status}
          </li>
          <li>
            <strong>Appearances</strong> {join(appearance)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterItem;
